export type Column = {
  accessor: string;
  header: string;
  cell: any;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = LoginPayload & {username: string};