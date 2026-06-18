import { notion } from "@/lib/notion";

type NotionDateProperty = {
  type: "date";
  date: { start: string };
};

type NotionEmailProperty = {
  type: "email";
  email: string;
};

type NotionTitleProperty = {
  type: "title";
  title: Array<{ type: "text"; text: { content: string } }>;
};

type NotionRichTextProperty = {
  type: "rich_text";
  rich_text: Array<{ type: "text"; text: { content: string } }>;
};

type NotionPageProperties = Record<
  string,
  NotionDateProperty | NotionEmailProperty | NotionTitleProperty | NotionRichTextProperty
>;

const dataSourceIdCache = new Map<string, string>();
const dataSourcePropertiesCache = new Map<string, Set<string>>();

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function titleProperty(content: string): NotionTitleProperty {
  return {
    type: "title",
    title: [{ type: "text", text: { content } }],
  };
}

function emailProperty(email: string): NotionEmailProperty {
  return { type: "email", email };
}

function dateProperty(date = getTodayDate()): NotionDateProperty {
  return { type: "date", date: { start: date } };
}

function richTextProperty(content: string): NotionRichTextProperty {
  return {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content } }],
  };
}

function requireDatabaseId(
  databaseId: string | undefined,
  envName: string,
): string {
  if (!databaseId) {
    throw new Error(`${envName} is not configured`);
  }

  return databaseId;
}

function pickPropertyName(
  available: Set<string>,
  candidates: string[],
): string | undefined {
  return candidates.find((name) => available.has(name));
}

function assignProperty(
  properties: NotionPageProperties,
  available: Set<string>,
  candidates: string[],
  value:
    | NotionDateProperty
    | NotionEmailProperty
    | NotionTitleProperty
    | NotionRichTextProperty,
) {
  const propertyName = pickPropertyName(available, candidates);
  if (propertyName) {
    properties[propertyName] = value;
  }
}

/**
 * Notion SDK v5 uses API 2025-09-03, where pages must be created under a
 * data source. Env values may be either a database ID or a data source ID.
 */
async function resolveDataSourceId(databaseOrDataSourceId: string) {
  const cached = dataSourceIdCache.get(databaseOrDataSourceId);
  if (cached) return cached;

  try {
    const database = await notion.databases.retrieve({
      database_id: databaseOrDataSourceId,
    });

    const dataSources =
      "data_sources" in database ? database.data_sources : undefined;
    const dataSourceId = dataSources?.[0]?.id;
    if (dataSourceId) {
      dataSourceIdCache.set(databaseOrDataSourceId, dataSourceId);
      return dataSourceId;
    }
  } catch {
    // The env value may already be a data source ID from the integration UI.
  }

  dataSourceIdCache.set(databaseOrDataSourceId, databaseOrDataSourceId);
  return databaseOrDataSourceId;
}

async function getDataSourcePropertyNames(dataSourceId: string) {
  const cached = dataSourcePropertiesCache.get(dataSourceId);
  if (cached) return cached;

  const dataSource = await notion.dataSources.retrieve({
    data_source_id: dataSourceId,
  });

  const propertyNames = new Set(Object.keys(dataSource.properties));
  dataSourcePropertiesCache.set(dataSourceId, propertyNames);
  return propertyNames;
}

async function createNotionPage(
  databaseOrDataSourceId: string,
  properties: NotionPageProperties,
) {
  const dataSourceId = await resolveDataSourceId(databaseOrDataSourceId);

  return notion.pages.create({
    parent: {
      type: "data_source_id",
      data_source_id: dataSourceId,
    },
    properties,
  });
}

export type HubRegistrationInput = {
  fullName: string;
  email: string;
  phoneNumber: string;
  audienceType: string;
  companyName?: string;
  branchCount?: string;
  serviceType?: string;
  message?: string;
};

export async function createWaitlistEntry(name: string, email: string) {
  const databaseId = requireDatabaseId(process.env.NOTION_DB, "NOTION_DB");
  const dataSourceId = await resolveDataSourceId(databaseId);
  const available = await getDataSourcePropertyNames(dataSourceId);
  const properties: NotionPageProperties = {};

  assignProperty(properties, available, ["Name"], titleProperty(name));
  assignProperty(properties, available, ["Email"], emailProperty(email));
  assignProperty(
    properties,
    available,
    ["Date Added", "Created", "Submitted At"],
    dateProperty(),
  );

  return createNotionPage(databaseId, properties);
}

export async function createHubRegistration(input: HubRegistrationInput) {
  const databaseId = requireDatabaseId(
    process.env.NOTION_HUB_DB,
    "NOTION_HUB_DB",
  );
  const dataSourceId = await resolveDataSourceId(databaseId);
  const available = await getDataSourcePropertyNames(dataSourceId);
  const properties: NotionPageProperties = {};

  assignProperty(
    properties,
    available,
    ["Name", "Full Name"],
    titleProperty(input.fullName),
  );
  assignProperty(properties, available, ["Email"], emailProperty(input.email));
  assignProperty(
    properties,
    available,
    ["Phone", "Phone Number"],
    richTextProperty(input.phoneNumber),
  );
  assignProperty(
    properties,
    available,
    ["Audience Type", "I am a"],
    richTextProperty(input.audienceType),
  );
  assignProperty(
    properties,
    available,
    ["Company Name"],
    richTextProperty(input.companyName || "N/A"),
  );
  assignProperty(
    properties,
    available,
    ["Number of Branches", "Branches", "Branch Count"],
    richTextProperty(input.branchCount || "N/A"),
  );
  assignProperty(
    properties,
    available,
    ["Service Type"],
    richTextProperty(input.serviceType || "N/A"),
  );
  assignProperty(
    properties,
    available,
    ["Message"],
    richTextProperty(input.message || "N/A"),
  );
  assignProperty(
    properties,
    available,
    ["Date Added", "Created", "Submitted At"],
    dateProperty(),
  );

  return createNotionPage(databaseId, properties);
}

export async function createBlogNotifyEntry(email: string) {
  const databaseId = requireDatabaseId(
    process.env.NOTION_BLOG_DB,
    "NOTION_BLOG_DB",
  );
  const dataSourceId = await resolveDataSourceId(databaseId);
  const available = await getDataSourcePropertyNames(dataSourceId);
  const properties: NotionPageProperties = {};

  assignProperty(
    properties,
    available,
    ["Name", "Subscriber"],
    titleProperty("Blog Notify Me"),
  );
  assignProperty(properties, available, ["Email"], emailProperty(email));
  assignProperty(
    properties,
    available,
    ["Date Added", "Created", "Submitted At"],
    dateProperty(),
  );

  return createNotionPage(databaseId, properties);
}
