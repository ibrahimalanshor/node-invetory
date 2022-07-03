import { IsDefined, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Expose } from 'class-transformer';

export default class LoginRequest {
  @Expose()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  public username: string;

  @Expose()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  public password: string;
}
