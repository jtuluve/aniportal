"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const {data} = useSession();
  if(data) redirect("/");
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    await signIn("credentials",{password})
  }
  return (
    <form className="max-w-[1200px] mx-auto mt-8 flex flex-wrap gap-2" onSubmit={handleLogin}>
      <input className="bg-black p-1" type="password" name="password" id="password" />
      <button className="bg-blue-700 p-1" type="submit">Login</button>
    </form>
  )
}
