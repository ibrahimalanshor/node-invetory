export default interface PaginateResult<T> {
  rows: T[];
  count: number;
}
