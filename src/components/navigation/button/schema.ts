import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const ButtonVariantSchema = z
  .enum(["primary", "secondary", "ghost", "destructive"])
  .default("primary");

export const ButtonSizeSchema = z.enum(["sm", "md", "lg", "xl"]).default("md");

export const ButtonPropsSchema = BaseComponentPropsSchema.extend({
  variant: ButtonVariantSchema.optional(),
  size: ButtonSizeSchema.optional(),
  disabled: z.boolean().optional(),
  loading: z.boolean().optional(),
  icon: z.any().optional(),
  onClick: z.function().optional(),
  type: z.enum(["button", "submit", "reset"]).optional(),
  fullWidth: z.boolean().optional(),
  asChild: z.boolean().optional(),
});

export type ButtonProps = z.infer<typeof ButtonPropsSchema>;
export type ButtonVariant = z.infer<typeof ButtonVariantSchema>;
export type ButtonSize = z.infer<typeof ButtonSizeSchema>;
