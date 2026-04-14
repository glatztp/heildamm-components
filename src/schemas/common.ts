import { z } from "zod";

export const BaseComponentPropsSchema = z.object({
  className: z.string().optional(),
  testId: z.string().optional(),
  children: z.any().optional(),
  id: z.string().optional(),
  "data-testid": z.string().optional(),
});

export type BaseComponentProps = z.infer<typeof BaseComponentPropsSchema>;
