import PaginateResult from './paginate_result.interface';

type GetResult<T> = PaginateResult<T> | T[];

export default GetResult;
