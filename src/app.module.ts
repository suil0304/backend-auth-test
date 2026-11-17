import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { ConfigModule } from "@nestjs/config";
import envSchema from './common/schema/env/index.js';
import { join } from 'path';
import commonConfig from './config/common.config.js';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [commonConfig],
            envFilePath: join(import.meta.dirname, `../.env.${process.env["NODE_ENV"]!}`),
            validationSchema: envSchema
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
