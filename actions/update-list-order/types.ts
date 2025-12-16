import { z } from "zod/v3";
import { UpdateListOrder } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@/lib/generated/prisma/client";

export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
