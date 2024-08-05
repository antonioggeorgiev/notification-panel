"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import { Button, Flex, Link } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const onSubmit = (data: SignUpFormValues) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <Tooltip.Provider>
      <Form.Root onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={"1"}>
          <Form.Field name="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control asChild>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <input
                    className="box-border m-0 py-2.5 px-4 bg-white text-black outline-transparent outline-2 outline-offset-2 w-full text-xs border"
                    type="text"
                    {...register("firstname")}
                  />
                </Tooltip.Trigger>
                {errors.firstname && (
                  <Tooltip.Content
                    side="bottom"
                    className="bg-red-500 text-white p-2 rounded z-60"
                  >
                    {errors.firstname.message?.toString()}
                    <Tooltip.Arrow className="fill-current text-red-500" />
                  </Tooltip.Content>
                )}
              </Tooltip.Root>
            </Form.Control>
          </Form.Field>
          <Form.Field
            name="lastname"
            className="box-border flex flex-col items-stretch justify-start relative flex-1"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control asChild>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <input
                    className="box-border m-0 py-2.5 px-4 bg-white text-black outline-transparent outline-2 outline-offset-2 w-full text-xs border"
                    type="text"
                    {...register("lastname")}
                  />
                </Tooltip.Trigger>
                {errors.lastname && (
                  <Tooltip.Content
                    side="bottom"
                    className="bg-red-500 text-white p-2 rounded z-60"
                  >
                    {errors.lastname.message?.toString()}
                    <Tooltip.Arrow className="fill-current text-red-500" />
                  </Tooltip.Content>
                )}
              </Tooltip.Root>
            </Form.Control>
          </Form.Field>
        </Flex>

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
            Continue
          </Button>
        </Form.Submit>
      </Form.Root>
      <div className="mt-4 text-center text-black">
        Have an account?
        <Link href="/sign-in" className="text-green-500 hover:underline">
          Sign in
        </Link>
      </div>
    </Tooltip.Provider>
  );
}
