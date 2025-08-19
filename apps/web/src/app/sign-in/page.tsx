"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Page() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");
  const router = useRouter();

  return (
    <div className="w-full max-w-6xl mx-auto grid place-content-center">
      <h2 className="font-semibold text-2xl text-red-400 tracking-tight text-center my-4">
        Better-t-stack
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          try {
            void signIn("password", formData);
            toast.success(
              step === "signUp" ? "Registration success!" : "Welcome back!"
            );
            router.push("/todos");
          } catch (error) {
            toast.error("Something went wrong please try again");
            console.log(error);
          }
        }}
        className="flex flex-col gap-4 w-full sm:w-[400px] px-4"
      >
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          name="email"
          placeholder="Email"
          type="text"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Input name="flow" type="hidden" value={step} />

        <Button type="submit" className="w-full sm:w-auto">
          {step === "signIn" ? "Sign in" : "Sign up"}
        </Button>
        <Button
          variant={"outline"}
          type="button"
          className="w-full sm:w-auto"
          onClick={() => {
            setStep(step === "signIn" ? "signUp" : "signIn");
          }}
        >
          {step === "signIn" ? "Sign up instead" : "Sign in instead"}
        </Button>
      </form>
    </div>
  );
}
