import { z } from "zod";

export function validateProps<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): z.SafeParseReturnType<unknown, T> {
  return schema.safeParse(data);
}

export function validatePropsOrThrow<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): T {
  return schema.parse(data);
}

export function withDefaults<T extends z.ZodTypeAny>(
  schema: T,
  defaults: Partial<z.infer<T>>,
): z.ZodEffects<T> {
  return schema.transform((data) => ({
    ...defaults,
    ...data,
  })) as z.ZodEffects<T>;
}

export function discriminatedSchema<T extends string>(
  discriminator: string,
  schemas: Record<T, z.ZodTypeAny>,
): z.ZodUnion<[z.ZodTypeAny, ...z.ZodTypeAny[]]> {
  const entries = Object.entries(schemas) as [T, z.ZodTypeAny][];
  const [first, ...rest] = entries.map(([key, schema]) =>
    schema.extend({ [discriminator]: z.literal(key) }),
  );

  return z.union([first, ...rest] as [z.ZodTypeAny, ...z.ZodTypeAny[]]);
}
