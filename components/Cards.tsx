import Card from "./Card"

interface Data {
  title: string
  image: string
  link: string
}


export default function Cards({data}:{data:Array<Data>}) {
  return (
    <div className="flex justify-around flex-wrap mt-8 mb-20 gap-[2rem_1rem]">
      {data.map((data) => (
        <Card key={data.title} title={data.title} image={data.image} link={data.link} />
      ))}
    </div>
  )
}
