import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const CardVariantSchema = z
  .enum(["default", "elevated", "outlined"])
  .default("default");

export const CardPropsSchema = BaseComponentPropsSchema.extend({
  variant: CardVariantSchema.optional(),
  onClick: z.function().optional(),
  interactive: z.boolean().optional(),
  padding: z.enum(["none", "sm", "md", "lg"]).optional(),
});

export const CardHeaderSchema = BaseComponentPropsSchema.extend({
  title: z.string().optional(),
  subtitle: z.string().optional(),
});

export const CardBodySchema = BaseComponentPropsSchema;

export const CardFooterSchema = BaseComponentPropsSchema;

export type CardProps = z.infer<typeof CardPropsSchema>;
export type CardVariant = z.infer<typeof CardVariantSchema>;
export type CardHeaderProps = z.infer<typeof CardHeaderSchema>;
export type CardBodyProps = z.infer<typeof CardBodySchema>;
export type CardFooterProps = z.infer<typeof CardFooterSchema>;
