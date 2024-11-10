export type Theme = "dark" | "light";
export type PaginationParams = {
  size: number;
  page: number;
};

export type GetExchangesParams = PaginationParams;

export type Exchange = {
  id: string;
  name: string;
  year_established: number;
  country: string;
  description: string;
  url: string;
  image: string;
  has_trading_incentive: boolean;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
  trade_volume_24h_btc_normalized: number;
};

// export type ExchangeTableColumn

export type Pagination<T> = {
  size: number;
  page: number;
  data: T[];
  total: number;
  pageCount: number;
};
