import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from '@nestjs/config';
import authConfig from '../config/auth.config.js';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule.forFeature(authConfig)],
            inject: [ConfigService],
            useFactory(configService:ConfigService) {
                return {
                    secret: configService.getOrThrow("auth.secret"),
                    signOptions: {
                        expiresIn: configService.getOrThrow("auth.options.expires-in")
                    }
                };
            }
        })
    ],
    providers: [AuthService]
})
export class AuthModule {}
