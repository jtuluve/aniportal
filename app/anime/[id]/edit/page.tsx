
import Form from "@/components/Form";

export default function Edit({params}:{params:{id:string}}) {
  return (
    <Form _id={params.id}/>
  )
}
