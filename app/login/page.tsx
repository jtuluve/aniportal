"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const {data} = useSession();
  if(data) redirect("/");
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signIn("credentials",{username: formData.get("username") as string, password: formData.get("password") as string});
  }
  return (
    <form className="max-w-[1200px] mx-auto mt-8 grid gap-2 w-fit p-5" onSubmit={handleLogin}>
      <input className="bg-black p-1" type="text" name="username" id="username" placeholder="username" />
      <input className="bg-black p-1" type="password" name="password" id="password" placeholder="password"/>
      <button className="bg-blue-700 p-1" type="submit">Login</button>
    </form>
  )
}
