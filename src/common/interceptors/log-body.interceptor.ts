import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogBodyInterceptor implements NestInterceptor {
    intercept(context:ExecutionContext, next:CallHandler<any>):Observable<any> {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();

        let body = request.body;
        if(typeof body === "object") {
            body = JSON.stringify(request.body);
        }

        console.log(`request body: ${JSON.stringify(request.body)}`);

        return next.handle()
            .pipe(
                tap((data) => {
                    let body = data;
                    if(typeof body === "object") {
                        body = JSON.stringify(body);
                    }

                    console.log(`response body: ${body}`);
                })
            );
    }
}