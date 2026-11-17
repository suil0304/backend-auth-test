import Zod from "zod";

export default Zod.object({
    APP_ENV: Zod.enum([
        "local",
        "development",
        "stage",
        "production"
    ]).nonoptional(),
    PORT: Zod.coerce.number().optional()
});
