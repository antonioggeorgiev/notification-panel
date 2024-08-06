"use client";

import { useForm } from "react-hook-form";
import * as Form from "@radix-ui/react-form";
import { Button, Link } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import { authenticate } from "@/app/lib/auth";
import { useFormState } from "react-dom";
import clsx from "clsx";

type SignInFormValues = {
  email: string;
  password: string;
};

const validateEmail = (email: string) => {
  if (!email) {
    return "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    return "Invalid email address";
  }
  return true;
};

const validatePassword = (password: string) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return true;
};

export default function SignIn() {
  const [errorMessage, formAction, isPending] = useFormState(
    authenticate,
    undefined
  );

  const onSubmit = async (data: SignInFormValues) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (response.ok) {
      window.location.href = '/'; // Redirect to a protected page after successful sign-in
    } else {
      // const data = await response.json();
      // console.error(data.message);
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormValues>();

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
        Invalid credentials.
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
