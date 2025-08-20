"use client";
import { SignInWithPassword } from "@/components/signin-with-password";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="w-full max-w-6xl mx-auto grid place-content-center">
      <Card className="backdrop-blur-md">
        <CardHeader>
          <CardTitle className="font-semibold text-2xl text-red-400 tracking-tight text-center my-4">
            Better-t-stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInWithPassword />
        </CardContent>
      </Card>
    </div>
  );
}
