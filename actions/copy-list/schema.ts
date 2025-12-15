import { z } from "zod/v3";

export const CopyList = z.object({
  id: z.string(),
  boardId: z.string(),
});
