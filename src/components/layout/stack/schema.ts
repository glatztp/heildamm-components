import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const DirectionSchema = z.enum(["row", "column"]).default("row");

export const JustifySchema = z
  .enum(["start", "end", "center", "between", "around", "evenly"])
  .default("start");

export const AlignSchema = z
  .enum(["start", "end", "center", "stretch", "baseline"])
  .default("stretch");

export const FlexPropsSchema = BaseComponentPropsSchema.extend({
  direction: DirectionSchema.optional(),
  justify: JustifySchema.optional(),
  align: AlignSchema.optional(),
  gap: z.enum(["none", "xs", "sm", "md", "lg", "xl"]).optional(),
  wrap: z.boolean().optional(),
  flex: z.union([z.number(), z.string()]).optional(),
  basis: z.string().optional(),
  grow: z.number().optional(),
  shrink: z.number().optional(),
});

export type FlexProps = z.infer<typeof FlexPropsSchema>;
export type Direction = z.infer<typeof DirectionSchema>;
export type Justify = z.infer<typeof JustifySchema>;
export type Align = z.infer<typeof AlignSchema>;
