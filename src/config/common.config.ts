import { registerAs } from "@nestjs/config";

export default registerAs("common", () => {
    return {
        "env": {
            "app": process.env["APP_ENV"]!
        }
    };
});