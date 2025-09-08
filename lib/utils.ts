import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type NotionQueryResponse = {
  results: any[]; // You can make this stricter if you know the shape
  has_more: boolean;
  next_cursor: string | null;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getNotionDatabaseRowCount(
  dataSourceId: string
): Promise<number> {
  try {
    let totalCount = 0;
    let hasMore = true;
    let nextCursor: string | null = null;

    while (hasMore) {
      const response: Response = await fetch(
        `https://api.notion.com/v1/data_sources/${dataSourceId}/query`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "Notion-Version": "2022-06-28",
            Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          },
          body: JSON.stringify({
            page_size: 100,
            start_cursor: nextCursor,
          }),
        }
      );
      console.log("na res be this", response);

      if (!response.ok) {
        throw new Error(`Failed request: ${response.status}`);
      }

      const data: NotionQueryResponse = await response.json();
      totalCount += data.results.length;

      hasMore = data.has_more;
      nextCursor = data.next_cursor;
    }

    return totalCount;
  } catch (error) {
    console.error("Error fetching database rows:", error);
    throw error;
  }
}
