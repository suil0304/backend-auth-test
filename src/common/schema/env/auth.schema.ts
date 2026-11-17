import Zod from "zod";

export default Zod.object({
    SECRET_KEY: Zod.string()
        .nonoptional()
});