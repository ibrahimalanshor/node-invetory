import { IsDefined, IsBoolean } from 'class-validator';
import { Expose } from 'class-transformer';

export default class CreateRequest {
  @Expose()
  @IsDefined()
  @IsBoolean()
  public status: string;
}
