import { z } from "zod/v3";

export const UpdateCardOrder = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      listId: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    })
  ),
  boardId: z.string(),
});
