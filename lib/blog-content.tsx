import React, { type ReactNode } from "react";

// ponytail: lightweight allowlist tokenizer -> React elements instead of jsdom/DOMPurify;
// zero dangerouslySetInnerHTML, so unknown tags/events/protocols cannot execute scripts.

const VOID_TAGS = new Set([
  "br",
  "hr",
  "img",
  "input",
  "meta",
  "link",
  "source",
  "track",
  "wbr",
]);

const DROP_WITH_CONTENT = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "svg",
  "math",
  "noscript",
  "template",
  "head",
]);

const ALLOWED_HTML_TAGS = new Set([
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "blockquote",
  "ul",
  "ol",
  "li",
  "pre",
  "code",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "del",
  "a",
  "img",
  "br",
  "hr",
  "figure",
  "figcaption",
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "span",
  "div",
]);

const TAG_CLASSES: Record<string, string> = {
  h2: "mt-10 mb-4 text-2xl sm:text-3xl font-semibold tracking-tight text-rideflow-ink-hard",
  h3: "mt-8 mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-rideflow-ink-hard",
  h4: "mt-6 mb-2 text-lg sm:text-xl font-semibold text-rideflow-ink-hard",
  p: "mb-5 text-base sm:text-[17px] leading-[1.8] text-rideflow-text",
  ul: "mb-6 list-disc pl-6 space-y-2 text-base sm:text-[17px] leading-[1.75] text-rideflow-text",
  ol: "mb-6 list-decimal pl-6 space-y-2 text-base sm:text-[17px] leading-[1.75] text-rideflow-text",
  li: "pl-1",
  blockquote:
    "my-6 border-l-4 border-rideflow-blue bg-body-gray px-5 py-4 rounded-r-xl italic text-rideflow-text",
  pre: "my-6 overflow-x-auto rounded-2xl bg-rideflow-ink-hard p-5 text-sm leading-relaxed text-white",
  code: "rounded bg-body-gray px-1.5 py-0.5 font-mono text-[0.9em] text-rideflow-ink-hard",
  hr: "my-8 border-rideflow-hairline",
  a: "font-medium text-rideflow-blue underline underline-offset-4 hover:text-blue-700",
  img: "my-6 w-full rounded-[20px] object-cover",
  figure: "my-6",
  figcaption: "mt-2 text-center text-sm text-rideflow-text-light",
  table: "my-6 w-full border-collapse text-left text-sm sm:text-base",
  th: "border-b border-rideflow-hairline py-2.5 pr-4 font-semibold text-rideflow-ink-hard",
  td: "border-b border-rideflow-hairline py-2.5 pr-4 text-rideflow-text",
};

type NextKey = () => string;

function safeUrl(raw: unknown, allowMailto = false): string | null {
  if (typeof raw !== "string") return null;
  const trimmed = raw.trim().replace(/[\u0000-\u001F\u007F]/g, "");
  if (!trimmed) return null;
  if (trimmed.startsWith("/") && !trimmed.startsWith("//")) return trimmed;
  if (trimmed.startsWith("#")) return trimmed;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed.toString();
    }
    if (allowMailto && parsed.protocol === "mailto:") {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: "\u00A0",
  ndash: "–",
  mdash: "—",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
  hellip: "…",
};

function decodeEntities(input: string): string {
  return input.replace(
    /&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g,
    (full, entity: string) => {
      if (entity.startsWith("#x") || entity.startsWith("#X")) {
        const code = Number.parseInt(entity.slice(2), 16);
        return Number.isFinite(code) && code > 0
          ? String.fromCodePoint(code)
          : full;
      }
      if (entity.startsWith("#")) {
        const code = Number.parseInt(entity.slice(1), 10);
        return Number.isFinite(code) && code > 0
          ? String.fromCodePoint(code)
          : full;
      }
      return NAMED_ENTITIES[entity] ?? full;
    },
  );
}

type HtmlAstNode =
  | { kind: "text"; text: string }
  | {
      kind: "el";
      tag: string;
      attrs: Record<string, string>;
      children: HtmlAstNode[];
    };

function parseAttrs(rawAttrs: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const attrRe =
    /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match: RegExpExecArray | null;
  while ((match = attrRe.exec(rawAttrs)) !== null) {
    const name = match[1].toLowerCase();
    const val = match[2] ?? match[3] ?? match[4] ?? "";
    attrs[name] = decodeEntities(val);
  }
  return attrs;
}

function parseSafeHtmlAst(html: string): HtmlAstNode[] {
  const cleaned = html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<!DOCTYPE[^>]*>/gi, "");
  const root: HtmlAstNode = { kind: "el", tag: "root", attrs: {}, children: [] };
  const stack: HtmlAstNode[] = [root];
  let dropDepth = 0;
  let dropTag = "";

  const tagRe = /<\/?([a-zA-Z][a-zA-Z0-9-]*)(\s[^<>]*?)?\s*\/?>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const pushText = (slice: string) => {
    if (!slice || dropDepth > 0) return;
    const parent = stack[stack.length - 1];
    if (parent.kind === "el") {
      parent.children.push({ kind: "text", text: decodeEntities(slice) });
    }
  };

  while ((match = tagRe.exec(cleaned)) !== null) {
    pushText(cleaned.slice(lastIndex, match.index));
    lastIndex = tagRe.lastIndex;

    const full = match[0];
    const rawName = match[1].toLowerCase();
    const isClosing = full.startsWith("</");
    const isSelfClosing = full.endsWith("/>") || VOID_TAGS.has(rawName);

    if (dropDepth > 0) {
      if (!isClosing && !isSelfClosing && rawName === dropTag) dropDepth += 1;
      else if (isClosing && rawName === dropTag) dropDepth -= 1;
      continue;
    }

    if (DROP_WITH_CONTENT.has(rawName)) {
      if (!isClosing && !isSelfClosing) {
        dropDepth = 1;
        dropTag = rawName;
      }
      continue;
    }

    if (isClosing) {
      for (let pos = stack.length - 1; pos > 0; pos--) {
        const candidate = stack[pos];
        if (candidate.kind === "el" && candidate.tag === rawName) {
          stack.length = pos;
          break;
        }
      }
      continue;
    }

    const node: HtmlAstNode = {
      kind: "el",
      tag: rawName,
      attrs: parseAttrs(match[2] ?? ""),
      children: [],
    };

    const parent = stack[stack.length - 1];
    if (parent.kind === "el") parent.children.push(node);
    if (!isSelfClosing) stack.push(node);
  }

  pushText(cleaned.slice(lastIndex));
  return root.children;
}

function astToReact(
  nodes: HtmlAstNode[],
  nextKey: NextKey,
  inPre = false,
): ReactNode[] {
  const out: ReactNode[] = [];

  for (const node of nodes) {
    if (node.kind === "text") {
      out.push(node.text);
      continue;
    }

    const rawTag = node.tag;
    if (!ALLOWED_HTML_TAGS.has(rawTag)) {
      out.push(...astToReact(node.children, nextKey, inPre));
      continue;
    }

    // Demote body H1 to H2 so the page keeps a single semantic H1 in the hero.
    const tag = rawTag === "h1" ? "h2" : rawTag;
    const key = nextKey();

    if (tag === "br" || tag === "hr") {
      out.push(React.createElement(tag, { key, className: TAG_CLASSES[tag] }));
      continue;
    }

    if (tag === "img") {
      const src = safeUrl(node.attrs.src, false);
      if (!src) continue;
      out.push(
        <img
          key={key}
          src={src}
          alt={node.attrs.alt || ""}
          loading="lazy"
          decoding="async"
          className={TAG_CLASSES.img}
        />,
      );
      continue;
    }

    const children = astToReact(node.children, nextKey, inPre || tag === "pre");

    if (tag === "a") {
      const href = safeUrl(node.attrs.href, true);
      if (!href) {
        out.push(<span key={key}>{children}</span>);
        continue;
      }
      const external = href.startsWith("http://") || href.startsWith("https://");
      out.push(
        <a
          key={key}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={TAG_CLASSES.a}
        >
          {children}
        </a>,
      );
      continue;
    }

    const className =
      tag === "code" && inPre ? "font-mono text-sm" : TAG_CLASSES[tag];
    out.push(React.createElement(tag, { key, className }, ...children));
  }

  return out;
}

function renderSafeHtml(html: string, nextKey: NextKey): ReactNode {
  if (!html.trim()) return null;
  return astToReact(parseSafeHtmlAst(html), nextKey);
}

type JsonRecord = Record<string, unknown>;

function isRecord(val: unknown): val is JsonRecord {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

function applyMarks(
  text: ReactNode,
  marks: unknown,
  nextKey: NextKey,
): ReactNode {
  if (!Array.isArray(marks)) return text;
  let acc: ReactNode = text;
  for (const mark of marks) {
    if (!isRecord(mark) || typeof mark.type !== "string") continue;
    const mk = nextKey();
    switch (mark.type) {
      case "bold":
      case "strong":
        acc = <strong key={mk}>{acc}</strong>;
        break;
      case "italic":
      case "em":
        acc = <em key={mk}>{acc}</em>;
        break;
      case "underline":
        acc = <u key={mk}>{acc}</u>;
        break;
      case "strike":
        acc = <s key={mk}>{acc}</s>;
        break;
      case "code":
        acc = (
          <code key={mk} className={TAG_CLASSES.code}>
            {acc}
          </code>
        );
        break;
      case "link": {
        const attrs = isRecord(mark.attrs) ? mark.attrs : {};
        const href = safeUrl(attrs.href, true);
        if (!href) break;
        const external =
          href.startsWith("http://") || href.startsWith("https://");
        acc = (
          <a
            key={mk}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={TAG_CLASSES.a}
          >
            {acc}
          </a>
        );
        break;
      }
      default:
        break;
    }
  }
  return acc;
}

function renderEditorJsBlocks(blocks: unknown[], nextKey: NextKey): ReactNode {
  const out: ReactNode[] = [];
  for (const block of blocks) {
    if (!isRecord(block) || typeof block.type !== "string") continue;
    const data = isRecord(block.data) ? block.data : {};
    const key = nextKey();

    if (block.type === "header") {
      const lvl = Math.min(4, Math.max(2, Number(data.level) || 2));
      const hTag = `h${lvl}` as "h2" | "h3" | "h4";
      out.push(
        React.createElement(
          hTag,
          { key, className: TAG_CLASSES[hTag] },
          typeof data.text === "string"
            ? renderSafeHtml(data.text, nextKey)
            : null,
        ),
      );
    } else if (block.type === "paragraph" && typeof data.text === "string") {
      out.push(
        <p key={key} className={TAG_CLASSES.p}>
          {renderSafeHtml(data.text, nextKey)}
        </p>,
      );
    } else if (block.type === "list" && Array.isArray(data.items)) {
      const listTag = data.style === "ordered" ? "ol" : "ul";
      const items: ReactNode[] = [];
      for (const it of data.items) {
        const itemKey = nextKey();
        const text =
          typeof it === "string"
            ? it
            : isRecord(it) && typeof it.content === "string"
              ? it.content
              : null;
        items.push(
          <li key={itemKey} className={TAG_CLASSES.li}>
            {text ? renderSafeHtml(text, nextKey) : null}
          </li>,
        );
      }
      out.push(
        React.createElement(
          listTag,
          { key, className: TAG_CLASSES[listTag] },
          ...items,
        ),
      );
    } else if (block.type === "image") {
      const file = isRecord(data.file) ? data.file : {};
      const src = safeUrl(file.url ?? data.url, false);
      if (!src) continue;
      out.push(
        <figure key={key} className={TAG_CLASSES.figure}>
          <img
            src={src}
            alt={typeof data.caption === "string" ? data.caption : ""}
            loading="lazy"
            decoding="async"
            className={TAG_CLASSES.img}
          />
        </figure>,
      );
    }
  }
  return out;
}

function renderQuillOps(ops: unknown[], nextKey: NextKey): ReactNode {
  const pieces: ReactNode[] = [];
  for (const op of ops) {
    if (!isRecord(op) || typeof op.insert !== "string") continue;
    let leaf: ReactNode = op.insert;
    const attrs = isRecord(op.attributes) ? op.attributes : {};
    if (attrs.bold) leaf = <strong>{leaf}</strong>;
    if (attrs.italic) leaf = <em>{leaf}</em>;
    const href = safeUrl(attrs.link, true);
    if (href) {
      leaf = (
        <a href={href} className={TAG_CLASSES.a}>
          {leaf}
        </a>
      );
    }
    pieces.push(<React.Fragment key={nextKey()}>{leaf}</React.Fragment>);
  }
  return (
    <p key={nextKey()} className={`${TAG_CLASSES.p} whitespace-pre-wrap`}>
      {pieces}
    </p>
  );
}

function renderRichNode(node: unknown, nextKey: NextKey): ReactNode {
  if (node == null || typeof node === "boolean") return null;
  if (typeof node === "string") return node;
  if (Array.isArray(node)) {
    const list: ReactNode[] = [];
    for (const child of node) {
      list.push(renderRichNode(child, nextKey));
    }
    return list;
  }
  if (!isRecord(node)) return null;

  if (Array.isArray(node.blocks)) {
    return renderEditorJsBlocks(node.blocks, nextKey);
  }
  if (Array.isArray(node.ops)) {
    return renderQuillOps(node.ops, nextKey);
  }
  if (isRecord(node.root)) {
    return renderRichNode(node.root, nextKey);
  }

  const key = nextKey();

  if (typeof node.html === "string") {
    return (
      <React.Fragment key={key}>
        {renderSafeHtml(node.html, nextKey)}
      </React.Fragment>
    );
  }

  if (
    typeof node.text === "string" &&
    !Array.isArray(node.content) &&
    !Array.isArray(node.children)
  ) {
    let leaf: ReactNode = node.text;
    if (node.bold) leaf = <strong>{leaf}</strong>;
    if (node.italic) leaf = <em>{leaf}</em>;
    if (node.underline) leaf = <u>{leaf}</u>;
    if (node.code) leaf = <code className={TAG_CLASSES.code}>{leaf}</code>;
    leaf = applyMarks(leaf, node.marks, nextKey);
    return <React.Fragment key={key}>{leaf}</React.Fragment>;
  }

  const rawChildren = Array.isArray(node.content)
    ? node.content
    : Array.isArray(node.children)
      ? node.children
      : [];
  const children: ReactNode[] = [];
  for (const child of rawChildren) {
    children.push(renderRichNode(child, nextKey));
  }
  const attrs = isRecord(node.attrs) ? node.attrs : {};
  const type = typeof node.type === "string" ? node.type : "";

  switch (type) {
    case "doc":
    case "root":
      return <React.Fragment key={key}>{children}</React.Fragment>;
    case "paragraph":
      return (
        <p key={key} className={TAG_CLASSES.p}>
          {children.length > 0 ? children : <br />}
        </p>
      );
    case "heading":
    case "heading-one":
    case "heading-two":
    case "heading-three": {
      const rawLevel =
        type === "heading-three"
          ? 3
          : Number(attrs.level ?? node.tag?.toString().replace("h", "")) || 2;
      const lvl = Math.min(4, Math.max(2, rawLevel));
      const hTag = `h${lvl}` as "h2" | "h3" | "h4";
      return React.createElement(
        hTag,
        { key, className: TAG_CLASSES[hTag] },
        ...children,
      );
    }
    case "bulletList":
    case "bulleted-list":
      return (
        <ul key={key} className={TAG_CLASSES.ul}>
          {children}
        </ul>
      );
    case "orderedList":
    case "numbered-list":
      return (
        <ol key={key} className={TAG_CLASSES.ol}>
          {children}
        </ol>
      );
    case "list":
      return node.listType === "number" ? (
        <ol key={key} className={TAG_CLASSES.ol}>
          {children}
        </ol>
      ) : (
        <ul key={key} className={TAG_CLASSES.ul}>
          {children}
        </ul>
      );
    case "listItem":
    case "listitem":
    case "list-item":
      return (
        <li key={key} className={TAG_CLASSES.li}>
          {children}
        </li>
      );
    case "blockquote":
    case "quote":
    case "block-quote":
      return (
        <blockquote key={key} className={TAG_CLASSES.blockquote}>
          {children}
        </blockquote>
      );
    case "codeBlock":
    case "code":
      return (
        <pre key={key} className={TAG_CLASSES.pre}>
          <code className="font-mono text-sm">{children}</code>
        </pre>
      );
    case "horizontalRule":
      return <hr key={key} className={TAG_CLASSES.hr} />;
    case "hardBreak":
    case "linebreak":
      return <br key={key} />;
    case "image": {
      const src = safeUrl(attrs.src ?? node.url ?? node.src, false);
      if (!src) return null;
      const alt =
        typeof attrs.alt === "string"
          ? attrs.alt
          : typeof node.alt === "string"
            ? node.alt
            : "";
      return (
        <img
          key={key}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={TAG_CLASSES.img}
        />
      );
    }
    case "link": {
      const href = safeUrl(attrs.href ?? node.url ?? node.href, true);
      if (!href) return <span key={key}>{children}</span>;
      const external = href.startsWith("http://") || href.startsWith("https://");
      return (
        <a
          key={key}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={TAG_CLASSES.a}
        >
          {children}
        </a>
      );
    }
    case "table":
      return (
        <table key={key} className={TAG_CLASSES.table}>
          <tbody>{children}</tbody>
        </table>
      );
    case "tableRow":
      return <tr key={key}>{children}</tr>;
    case "tableHeader":
      return (
        <th key={key} className={TAG_CLASSES.th}>
          {children}
        </th>
      );
    case "tableCell":
      return (
        <td key={key} className={TAG_CLASSES.td}>
          {children}
        </td>
      );
    default:
      return children.length > 0 ? (
        <p key={key} className={TAG_CLASSES.p}>
          {children}
        </p>
      ) : null;
  }
}

export function BlogArticleContent({
  content,
  contentFormat,
}: {
  content: unknown;
  contentFormat?: string | null;
}) {
  if (content == null) return null;

  let seq = 0;
  const nextKey: NextKey = () => `n${++seq}`;

  if (typeof content === "string") {
    const trimmed = content.trim();
    if (!trimmed) return null;
    if (
      contentFormat !== "html" &&
      (trimmed.startsWith("{") || trimmed.startsWith("["))
    ) {
      try {
        return <>{renderRichNode(JSON.parse(trimmed), nextKey)}</>;
      } catch {
        // Fall through to safe HTML / plain text rendering.
      }
    }
    return <>{renderSafeHtml(trimmed, nextKey)}</>;
  }

  return <>{renderRichNode(content, nextKey)}</>;
}
