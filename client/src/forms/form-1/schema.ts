import { z } from "zod";

const form1Schema = z.object({
  firstName: z.string({ required_error: "required" }),
  lastName: z.string({ required_error: "required" }),
});

export default form1Schema;
