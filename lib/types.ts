
export interface IUser {
  id: string;
  name: string;
  email: string;
  accountId: string;
}

export interface IAccount {
  $id: string;
}

export interface IDocumentList<T> {
  documents: T[];
}
