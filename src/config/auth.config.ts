import { registerAs } from "@nestjs/config";

export default registerAs("auth", () => {
    return {
        "secret": process.env["SECRET_KEY"],
        "options": {
            "expires-in": "30m"
        }
    };
});