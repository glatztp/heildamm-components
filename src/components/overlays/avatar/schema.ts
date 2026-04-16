import { z } from 'zod';
import { BaseComponentPropsSchema } from '../../../schemas/common';

export const AvatarSizeSchema = z.enum(['xs', 'sm', 'md', 'lg', 'xl']);
export const AvatarShapeSchema = z.enum(['circle', 'square']);

export const AvatarPropsSchema = BaseComponentPropsSchema.extend({
  src: z.string().optional(),
  alt: z.string().optional(),
  initials: z.string().optional(),
  size: AvatarSizeSchema.optional(),
  shape: AvatarShapeSchema.optional(),
});

export type AvatarSize = z.infer<typeof AvatarSizeSchema>;
export type AvatarShape = z.infer<typeof AvatarShapeSchema>;
export type AvatarProps = z.infer<typeof AvatarPropsSchema>;
