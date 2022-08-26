import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'John Doe',
  })
  public name: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '1122334455',
  })
  public taxId: string;
}

export class CustomerFilterDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '1122334455',
  })
  public taxId: string;
}
