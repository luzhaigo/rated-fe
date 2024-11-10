import { GetExchangesParams, Exchange, Pagination } from "@/app/types";

const API_ENDPOINT = `${process.env.EXCHANGES_API}/${process.env.EXCHANGES_API_VERSION}`;

const getAllExchanges = async (): Promise<Exchange[]> => {
  const data = await fetch(`${API_ENDPOINT}/exchanges`, {
    next: { revalidate: 600 },
    cache: "force-cache",
  }).then((res) => res.json());

  if (!Array.isArray(data)) {
    const error = new Error(data.status?.error_message);
    throw error;
  }

  return data;
};

/**
 * I cannot find the document that explains how to retrieve exchanges along with the total size.
 * Therefore, I implemented pagination on the server side.
 */
export const getExchanges = async (
  { size = 15, page = 1 } = {} as Partial<GetExchangesParams>
): Promise<Pagination<Exchange>> => {
  const exchanges: Exchange[] = await getAllExchanges();

  const start = (page - 1) * size;

  return {
    page,
    size,
    data: exchanges.slice(start, start + size),
    total: exchanges.length,
    pageCount: Math.ceil(exchanges.length / size),
  };
};
