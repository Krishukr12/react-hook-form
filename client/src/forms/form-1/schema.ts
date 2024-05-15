import { z } from "zod";

const form1Schema = z.object({
  firstName: z.string().min(3, { message: "Min 3 characters is required" }),
  lastName: z.string().min(3, { message: "Min 3 characters is required" }),
});

export default form1Schema;
