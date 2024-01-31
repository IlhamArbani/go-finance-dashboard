export type Column = {
  accessor: string;
  header: any;
  cell: any;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = LoginPayload & {username: string};

export type TransactionsPayload = {
  name: string,
  price: number,
  date: string,
  status: string,
}

export type Transactions = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }[],
  support: {
    url: string;
    text: string;
  }
}

export type User = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  },
  support: {
    url: string;
    text: string;
  }
}

export type LoginResponse = {
  id: number;
  token: string;
}