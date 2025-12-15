import { z } from "zod/v3";

export const DeleteList = z.object({
  id: z.string(),
  boardId: z.string(),
});
