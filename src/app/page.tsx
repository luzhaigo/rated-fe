import ExchangeTable from "@/app/components/ExchangeTable";
import { getExchanges } from "@/app/utils/api";
import { PaginationParams } from "@/app/types";
import { PAGE, PAGE_SIZE } from "@/app/constants";
import styles from "./page.module.css";

type Props = {
  searchParams: Promise<PaginationParams>;
};

export default async function Home(props: Props) {
  const { size = PAGE_SIZE, page = PAGE } = await props.searchParams;
  const data = await getExchanges({ size, page });
  return (
    <div className={styles.page}>
      <ExchangeTable {...data} />
    </div>
  );
}
