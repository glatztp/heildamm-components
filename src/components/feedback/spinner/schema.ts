import { z } from 'zod';
import { BaseComponentPropsSchema } from '../../../schemas/common';

export const SpinnerSizeSchema = z.enum(['sm', 'md', 'lg']);

export const SpinnerPropsSchema = BaseComponentPropsSchema.extend({
  size: SpinnerSizeSchema.optional(),
  label: z.string().optional(),
});

export type SpinnerSize = z.infer<typeof SpinnerSizeSchema>;
export type SpinnerProps = z.infer<typeof SpinnerPropsSchema>;
