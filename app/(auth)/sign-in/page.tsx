"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import { Button, Link } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignIn() {
  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <Tooltip.Provider>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Form.Field
          name="email"
          className="box-border flex flex-col items-stretch justify-start relative flex-1"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control asChild>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <input
                  className="box-border m-0 py-2.5 px-4 bg-white text-black outline-transparent outline-2 outline-offset-2 w-full text-xs border"
                  type="email"
                  {...register("email")}
                />
              </Tooltip.Trigger>
              {errors.email && (
                <Tooltip.Content
                  side="bottom"
                  className="bg-red-500 text-white p-2 rounded z-60"
                >
                  {errors.email.message?.toString()}
                  <Tooltip.Arrow className="fill-current text-red-500" />
                </Tooltip.Content>
              )}
            </Tooltip.Root>
          </Form.Control>
        </Form.Field>

        <Form.Field
          name="password"
          className="box-border flex flex-col items-stretch justify-start relative flex-1"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control asChild>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <input
                  {...register("password")}
                  type="password"
                  className="box-border m-0 py-2.5 px-4 bg-white text-black outline-transparent outline-2 outline-offset-2 w-full text-xs border"
                />
              </Tooltip.Trigger>
              {errors.password && (
                <Tooltip.Content
                  side="bottom"
                  className="bg-red-500 text-white p-2 rounded z-60"
                >
                  {errors.password.message?.toString()}
                  <Tooltip.Arrow className="fill-current text-red-500" />
                </Tooltip.Content>
              )}
            </Tooltip.Root>
          </Form.Control>
        </Form.Field>

        <Form.Submit asChild className="mt-2">
          <Button
            type="submit"
            variant="solid"
            color="green"
            className="w-full bg-emerald-600 hover:bg-emerald-700 uppercase font-semi-bold text-xxs"
          >
            Sign In
          </Button>
        </Form.Submit>
      </Form.Root>
      <div className="mt-4 text-center text-black">
        {"Don't have an account?"}
        <Link href="/sign-up" className="text-green-500 hover:underline">
          Sign up
        </Link>
      </div>
    </Tooltip.Provider>
  );
}
