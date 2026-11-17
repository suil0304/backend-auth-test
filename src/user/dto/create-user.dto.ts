import { IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly name:string;

    @IsString()
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 0
    })
    @MaxLength(30)
    readonly password:string;
}
