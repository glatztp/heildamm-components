import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const GapSchema = z
  .enum(["none", "xs", "sm", "md", "lg", "xl"])
  .default("md");

export const GridPropsSchema = BaseComponentPropsSchema.extend({
  columns: z.number().min(1).optional(),
  gap: GapSchema.optional(),
  autoFlow: z.enum(["row", "column", "dense"]).optional(),
  alignItems: z
    .enum(["start", "end", "center", "stretch", "baseline"])
    .optional(),
  justifyItems: z
    .enum(["start", "end", "center", "between", "around", "evenly"])
    .optional(),
});

export type GridProps = z.infer<typeof GridPropsSchema>;
export type Gap = z.infer<typeof GapSchema>;
