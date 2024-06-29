
import Form from "@/components/Form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Edit({params}:{params:{id:string}}) {
  const session = await getServerSession();
  if(!session?.user) redirect("/");
  return (
    <Form _id={params.id}/>
  )
}
