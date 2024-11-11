import { expect, test } from "vitest";
import { getExchanges } from "./api";
import "@/app/mocks/server";

test("Should fetch exchanges data with page size 15 and page number 1, and validates response structure", async () => {
  const data = await getExchanges();

  expect(data).toEqual({
    page: 1,
    size: 15,
    total: 100,
    pageCount: 7,
    data: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
      }),
    ]),
  });

  expect(data.data).toHaveLength(15);
});

test("Should fetch exchanges data with page size 20 and page number 2, and validates response structure", async () => {
  const data = await getExchanges({ page: 2, size: 20 });

  expect(data).toEqual({
    page: 2,
    size: 20,
    total: 100,
    pageCount: 5,
    data: expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
      }),
    ]),
  });

  expect(data.data).toHaveLength(20);
});
