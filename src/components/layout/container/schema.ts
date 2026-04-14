import { z } from "zod";
import { BaseComponentPropsSchema } from "../../../schemas/common";

export const ContainerPropsSchema = BaseComponentPropsSchema.extend({
  size: z.enum(["sm", "md", "lg", "xl", "2xl"]).optional(),
  centerContent: z.boolean().optional(),
  padding: z.enum(["none", "sm", "md", "lg"]).optional(),
});

export type ContainerProps = z.infer<typeof ContainerPropsSchema>;
