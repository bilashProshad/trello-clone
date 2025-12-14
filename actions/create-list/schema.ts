import { z } from "zod/v3";

export const CreateList = z.object({
  boardId: z.string(),
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, { message: "Title is too short" }),
});
