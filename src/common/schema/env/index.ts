import Zod from "zod";
import commonSchema from "./common.schema.js";

export default Zod.object({
    ...commonSchema.shape
});