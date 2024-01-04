"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginData } from "../schemas/auth/loginSchema";
import { TextInput } from "@/shared/forms/Text";
import { PasswordInput } from "@/shared/forms/Password";
import { Button } from "@/shared/Button";
import FormContainer from "@/shared/containers/FormContainer";
import { login } from "./request/login";
import { IUserCredencials } from "@/interfaces/auth/userCredencials";
import { useRouter } from "next/navigation";

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginData> = async (values) => {
    if (values) {
      const { data } = await login<IUserCredencials>(
        values.email,
        values.password
      );
      console.log(data);
      router.push("/dashboard");
    }
    reset();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1>hello</h1>
        <FormContainer onSubmit={handleSubmit(onSubmit)} title="Testing 📜">
          <TextInput
            label="Email"
            classNames={{
              label: "text-white",
              input: "p-2 text-black",
              error: "text-red-500",
            }}
            autoComplete="username"
            type="text"
            error={errors.email?.message}
            {...register("email")}
          />
          <PasswordInput
            label="Password"
            classNames={{
              label: "text-white",
              input: "p-2 text-black",
              error: "text-red-500",
            }}
            autoComplete="current-password"
            type={isPasswordVisible ? "text" : "password"}
            error={errors.password?.message}
            showPasswordToggle
            onTogglePasswordVisibility={() =>
              setPasswordVisibility(!isPasswordVisible)
            }
            isPasswordVisible={isPasswordVisible}
            {...register("password")}
          />
          <div className="flex justify-center mt-2">
            <Button type="submit" className="mt-4">
              Register
            </Button>
          </div>
        </FormContainer>
      </div>
    </main>
  );
};

export default Home;
