import { Inject, Injectable, NotImplementedException } from '@nestjs/common';
import authConfig from '../config/auth.config.js';
import type { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        @Inject(authConfig.KEY)
        private readonly config:ConfigType<typeof authConfig>
    ) {}

    async register() {
        // TODO: DB 연결 후 구현하세요

        // 1. unique가 될 email을 받아 유저를 가져온다
        // 2. 이를 바탕으로 access token과 refresh token을 발급한다
        // 3. access token과 refresh token을 container에 감싸 반환한다

        throw new NotImplementedException();
    }

    async login() {
        // TODO: DB 연결 후 구현하세요

        // 1. email, password를 받아온다
        // 2. email로 현재 유저를 가져온다
        // 3. password와 현재 유저의 password가 동일한지 검증한다
        // 4. 검증에 통과한 경우 다시 access token과 refresh token을 발급한다
        // 5. access token과 refresh token을 container에 감싸 반환한다

        throw new NotImplementedException();
    }

    async refresh() {
        // TODO: DB 연결 후 구현하세요

        // 1. refresh token을 받아온다
        // 2. 검증한다
        // 3. access token을 발급한 후 반환한다

        throw new NotImplementedException();
    }
}
