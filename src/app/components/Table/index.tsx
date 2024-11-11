import { useCallback } from "react";
import { useRouter } from "next/navigation";
import RCTable, { TableProps } from "rc-table";
import ReactPaginate from "react-paginate";
import styles from "./index.module.css";
import "./index.css";

type Props<T> = TableProps & {
  data: T[];
  page: number;
  pageCount: number;
};

const Table = <T,>({ data, page, pageCount, ...rest }: Props<T>) => {
  const router = useRouter();

  const handlePageChange = useCallback(({ selected }: { selected: number }) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", `${selected + 1}`);

    router.push(`${window.location.pathname}?${searchParams.toString()}`, {
      scroll: document.documentElement.clientWidth < 800,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className={styles["exchange-table"]}>
        <div className={styles["exchange-table-wrapper"]}>
          <RCTable
            {...rest}
            data={data}
            emptyText={<p className={styles.noData}>No Data</p>}
          />
        </div>
      </div>
      {pageCount && data && data.length !== 0 && (
        <div className={styles.pagination}>
          <p className={styles["page-info"]}>
            Page {page || 0} out of {pageCount}
          </p>
          <ReactPaginate
            disableInitialCallback
            initialPage={page - 1 || 0}
            className="react-paginate"
            pageClassName="page-item-none"
            breakClassName="page-item-none"
            onPageChange={handlePageChange}
            pageCount={pageCount}
            previousLabel="←"
            nextLabel="→"
          />
        </div>
      )}
    </div>
  );
};

export default Table;
