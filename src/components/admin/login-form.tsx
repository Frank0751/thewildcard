"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <Label htmlFor="password" className="eyebrow text-muted-foreground">
          Admin password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          placeholder="Enter password"
          className="mt-2"
        />
      </div>
      {state.error && (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{state.error}</p>
      )}
      <Button type="submit" disabled={pending} className="w-full bg-brand-teal text-background hover:bg-brand-teal-dark" size="lg">
        <Lock className="mr-2 h-4 w-4" />
        {pending ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
