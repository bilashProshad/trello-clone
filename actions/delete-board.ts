"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: string) {
  await prisma.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_35n6trZv5UFsBoSyO9Y94ZUFA1x");
}
