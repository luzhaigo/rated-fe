import ExchangeTable from "@/app/components/ExchangeTable";
import { getExchanges } from "@/app/utils/api";
import { PaginationParams } from "@/app/types";
import styles from "./page.module.css";

type Props = {
  searchParams: Promise<PaginationParams>;
};

export default async function Home(props: Props) {
  const { size = 15, page = 1 } = await props.searchParams;
  const data = await getExchanges({ size, page });
  return (
    <div className={styles.page}>
      <ExchangeTable {...data} />
    </div>
  );
}
