import { z } from "zod/v3";

export const CopyCard = z.object({
  id: z.string(),
  boardId: z.string(),
});
