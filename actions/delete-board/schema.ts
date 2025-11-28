import { z } from "zod/v3";

export const DeleteBoard = z.object({
  id: z.string(),
});
