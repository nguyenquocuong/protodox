import type z from "zod";

export const zodMessageResolver = (
  { code, path }: z.core.$ZodRawIssue,
  message?: string,
) => `${path?.join(".")}.${message ?? code}`;
