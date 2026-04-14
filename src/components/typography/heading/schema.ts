import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const TypographyElementSchema = z
  .enum(["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "label", "small"])
  .default("p");

export const TypographyWeightSchema = z
  .enum(["light", "normal", "medium", "semibold", "bold"])
  .default("normal");

export const HeadingPropsSchema = BaseComponentPropsSchema.extend({
  level: z.number().min(1).max(6).optional(),
  weight: TypographyWeightSchema.optional(),
  color: z.string().optional(),
});

export type HeadingProps = z.infer<typeof HeadingPropsSchema>;
export type TypographyElement = z.infer<typeof TypographyElementSchema>;
export type TypographyWeight = z.infer<typeof TypographyWeightSchema>;
