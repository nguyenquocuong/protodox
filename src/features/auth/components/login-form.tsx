"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type TLoginSchema, useLoginSchema } from "../schemas/auth.schema";
import TermsAndPrivacy from "./terms-and-privacy";

type Props = {
  email?: string;
  isSignup?: boolean;
  // onSuccess: (email: string, password: string) => Promise<void>;
};

export default function LoginForm(props: Props) {
  const {
    email,
    // onSuccess
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const schema = useLoginSchema();
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email,
      password: "",
    },
  });

  useEffect(() => {
    form.setFocus("email");
  }, [form]);

  const onSubmit = form.handleSubmit(async (values: TLoginSchema) => {
    const { email, password } = values;
    // await onSuccess(email, password);
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex flex-col items-stretch gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    id="email"
                    aria-label="Email"
                    type="email"
                    placeholder="Enter email address"
                    className="h-12 rounded-2xl px-4 text-base outline-none placeholder:text-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      aria-label="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="h-12 rounded-2xl px-4 pr-12 text-base outline-none placeholder:text-gray-500"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-11 w-full rounded-full px-4 text-base font-semibold"
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Continue"
          )}
        </Button>

        <TermsAndPrivacy />
      </form>
    </Form>
  );
}
