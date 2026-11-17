import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto.js';

export class UpdateUserDto extends OmitType(PartialType(CreateUserDto), ["password"]) {}
