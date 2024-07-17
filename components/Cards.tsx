import Card from "./Card"

interface Data {
  English: string
  Japanese: string
  thumbnail: string
  picture: string
  link: string
}


export default function Cards({data}:{data:Array<Data>}) {
  console.log(data)
  return (
    <div className="flex justify-around flex-wrap mt-8 mb-20 gap-[2rem_1rem]">
      {data.map((data) => (
        <Card key={data.link} title={data.English} image={data.thumbnail||data.picture} link={data.link} />
      ))}
    </div>
  )
}
