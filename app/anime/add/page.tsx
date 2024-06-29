
import Form from "@/components/Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Add() {
  const session = await getServerSession();
  if(!session?.user) redirect("/");
  return (
    <Form/>
  )
}
