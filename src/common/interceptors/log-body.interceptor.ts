import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

interface RequestType {
    body:unknown;
}

@Injectable()
export class LogBodyInterceptor implements NestInterceptor {
    intercept(context:ExecutionContext, next:CallHandler):Observable<unknown> {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest<RequestType>();

        let body = request.body;
        if(
            typeof body === "object"
            && body !== null
        ) {
            body = JSON.stringify(body);
        }

        console.log(`request body: ${body}`);

        return next.handle()
            .pipe(
                tap((data:unknown) => {
                    let body = data;
                    if(
                        typeof body === "object"
                        && body !== null
                    ) {
                        body = JSON.stringify(body);
                    }

                    console.log(`response body: ${body}`);
                })
            );
    }
}
