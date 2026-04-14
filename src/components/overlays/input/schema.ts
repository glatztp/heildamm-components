import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const InputTypeSchema = z
  .enum([
    "text",
    "email",
    "password",
    "number",
    "tel",
    "url",
    "date",
    "time",
    "search",
  ])
  .default("text");

export const InputStateSchema = z
  .enum(["default", "error", "success", "warning"])
  .default("default");

export const InputPropsSchema = BaseComponentPropsSchema.extend({
  type: InputTypeSchema.optional(),
  placeholder: z.string().optional(),
  value: z.union([z.string(), z.number()]).optional(),
  onChange: z.function().optional(),
  onBlur: z.function().optional(),
  onFocus: z.function().optional(),
  disabled: z.boolean().optional(),
  readOnly: z.boolean().optional(),
  required: z.boolean().optional(),
  maxLength: z.number().optional(),
  minLength: z.number().optional(),
  pattern: z.string().optional(),
  state: InputStateSchema.optional(),
  error: z.string().optional(),
  hint: z.string().optional(),
  label: z.string().optional(),
  name: z.string().optional(),
  autoComplete: z.string().optional(),
});

export type InputProps = z.infer<typeof InputPropsSchema>;
export type InputType = z.infer<typeof InputTypeSchema>;
export type InputState = z.infer<typeof InputStateSchema>;
