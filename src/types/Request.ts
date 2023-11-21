export interface IRequestService<T> {
  getData: (path: string) => Promise<T>;
  postData: <D>(path: string, body: D) => Promise<T>;
  putData: <U>(path: string, body: U) => Promise<T>;
  deleteData: (path: string) => Promise<T>;
}
