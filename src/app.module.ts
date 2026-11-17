import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [],
            envFilePath: `../.env.${process.env["NODE_ENV"]!}`,
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
