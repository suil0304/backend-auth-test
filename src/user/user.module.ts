import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { LogBodyInterceptor } from '../common/interceptors/log-body.interceptor.js';

@Module({
    controllers: [UserController],
    providers: [UserService, LogBodyInterceptor]
})
export class UserModule {}
