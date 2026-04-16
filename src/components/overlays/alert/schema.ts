import { z } from 'zod';
import { BaseComponentPropsSchema } from '../../../schemas/common';

export const AlertVariantSchema = z.enum(['info', 'success', 'warning', 'danger']);

export const AlertPropsSchema = BaseComponentPropsSchema.extend({
  variant: AlertVariantSchema.optional(),
  title: z.string().optional(),
  dismissible: z.boolean().optional(),
  onDismiss: z.function().optional(),
});

export type AlertVariant = z.infer<typeof AlertVariantSchema>;
export type AlertProps = z.infer<typeof AlertPropsSchema>;
