import {IsNumber, IsString} from "class-validator";

export class CreatePersonDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsNumber()
    age: number;

    @IsString()
    sex: string;
}
