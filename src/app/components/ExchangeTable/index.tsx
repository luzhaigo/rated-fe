"use client";
import { FC } from "react";
import Image from "next/image";
import Table from "@/app/components/Table";
import { Exchange } from "@/app/types";
import styles from "./index.module.css";

const columns = [
  {
    title: "Exchange",
    dataIndex: "name",
    key: "name",
    render(name: string, data: { image: string; description: string }) {
      return (
        <div className={styles["name-cell"]}>
          <Image
            className={styles.icon}
            src={data.image}
            alt={data.description ?? name}
            width={20}
            height={20}
          />
          <p>{name}</p>
        </div>
      );
    },
  },
  {
    title: "Year established",
    dataIndex: "year_established",
    align: "center" as const,
    key: "year_established",
  },
  {
    title: "Country",
    dataIndex: "country",
    align: "center" as const,
    key: "country",
  },
  {
    title: "Trust score",
    dataIndex: "trust_score",
    align: "center" as const,
    key: "trust_score",
  },
  {
    title: "Volume(24h)",
    dataIndex: "trade_volume_24h_btc",
    key: "trade_volume_24h_btc",
    align: "center" as const,
    render(vol: number) {
      return <p>{vol} BTC</p>;
    },
  },
  {
    title: "Normalized Volume(24h)",
    dataIndex: "trade_volume_24h_btc_normalized",
    key: "trade_volume_24h_btc_normalized",
    align: "center" as const,
    render(vol: number) {
      return <p>{vol} BTC</p>;
    },
  },
];

type Props = {
  data: Exchange[];
  page: number;
  pageCount: number;
};

const ExchangeTable: FC<Props> = ({ data, page, pageCount }) => {
  return (
    <Table
      rowClassName={styles["exchange-row"]}
      data={data}
      columns={columns}
      page={page}
      pageCount={pageCount}
      rowKey={(record: Exchange) => record.id}
      onRow={(record: Exchange) => ({
        onClick: () => window.open(record.url, "__blank"),
      })}
    />
  );
};

export default ExchangeTable;
