import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";
import { off } from "process";



export class PaginationDto {

    @IsOptional()
    @IsPositive()
    @Min(1)
    @IsNumber()
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number;
}