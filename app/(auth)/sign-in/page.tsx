"use client";

import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import { Button, Link } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import { authenticate } from "@/app/lib/auth";
import clsx from "clsx";
import { validateEmail, validatePassword } from "@/app/lib/validation"; // Assuming validation functions are exported from a separate file
import { useState } from "react";
import { useRouter } from "next/navigation";

type SignInFormValues = {
  email: string;
  password: string;
};

export default function SignIn() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>();

  const onSubmit = async (data: SignInFormValues) => {
    setIsPending(true);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      await authenticate(formData);
      router.push("/");
    } catch (error) {
      setErrorMessage("Invalid credentials.");
    } finally {
      setIsPending(false);
    }
  };

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
                  {...register("email", { validate: validateEmail })}
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
                  {...register("password", { validate: validatePassword })}
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
            disabled={isPending}
          >
            Sign In
          </Button>
        </Form.Submit>
      </Form.Root>
      <p className={clsx("text-danger", { hidden: !errorMessage })}>
        {errorMessage}
      </p>
      <div className="mt-4 text-center text-black">
        {"Don't have an account?"}
        <Link href="/sign-up" className="text-green-500 hover:underline">
          Sign up
        </Link>
      </div>
    </Tooltip.Provider>
  );
}
