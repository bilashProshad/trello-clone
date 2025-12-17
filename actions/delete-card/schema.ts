import { z } from "zod/v3";

export const DeleteCard = z.object({
  id: z.string(),
  boardId: z.string(),
});
