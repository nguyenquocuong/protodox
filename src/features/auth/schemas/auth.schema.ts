import { useTranslations } from "next-intl";
import z from "zod";
import { zodMessageResolver } from "@/lib/zod-config";

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 256;

export const useLoginSchema = () => {
  const t = useTranslations("LoginForm.validation");

  return z.object({
    email: z.email(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, {
        error: (iss) =>
          t(zodMessageResolver(iss), { minimum: PASSWORD_MIN_LENGTH }),
      })
      .max(PASSWORD_MAX_LENGTH, {
        error: (iss) =>
          t(zodMessageResolver(iss), { maximum: PASSWORD_MAX_LENGTH }),
      })
      .regex(/[0-9]/, {
        error: (iss) => t(zodMessageResolver(iss, "missing_number")),
      })
      .regex(/[^a-zA-Z0-9]/, {
        error: (iss) => t(zodMessageResolver(iss, "missing_symbol")),
      }),
  });
};

export type TLoginSchema = z.infer<ReturnType<typeof useLoginSchema>>;
