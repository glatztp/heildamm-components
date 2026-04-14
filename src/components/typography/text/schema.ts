import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const TypographyVariantSchema = z
  .enum(["body", "caption", "code"])
  .default("body");

export const TextPropsSchema = BaseComponentPropsSchema.extend({
  variant: TypographyVariantSchema.optional(),
  color: z.string().optional(),
  weight: z.enum(["light", "normal", "medium", "semibold", "bold"]).optional(),
});

export type TextProps = z.infer<typeof TextPropsSchema>;
export type TypographyVariant = z.infer<typeof TypographyVariantSchema>;
