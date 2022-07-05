import {
  IsDefined,
  IsNotEmpty,
  IsString,
  IsNumberString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Expose } from 'class-transformer';

export default class CreateRequest {
  @Expose()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public name: string;

  @Expose()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public address: string;

  @Expose()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsNumberString()
  @MinLength(10)
  @MaxLength(15)
  public phone: string;
}
