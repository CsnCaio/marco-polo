import { Configuration, Value } from '@itgorillaz/configify';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

@Configuration()
export class DatabaseConfiguration {
  @IsString()
  @IsNotEmpty()
  @Value('DB_HOST')
  host!: string;

  @IsNumberString()
  @IsNotEmpty()
  @Value('DB_PORT', { parse: parseInt })
  port!: number;

  @IsString()
  @IsNotEmpty()
  @Value('DB_NAME')
  name!: string;

  @IsString()
  @IsNotEmpty()
  @Value('DB_USER')
  user!: string;

  @IsString()
  @IsNotEmpty()
  @Value('DB_PASSWORD')
  password!: string;
}
