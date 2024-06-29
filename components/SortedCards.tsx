import Cards from "./Cards";

interface Data {
  title: string
  image: string
  link: string
}

export default function SortedCards({data}:{data:Data[]}) {
  let newData:Array<Data[]> = [];
  let cur = 0;
  data.forEach((dataL, index, data) => {
    if(index===0){
      return newData.push([dataL]);
    }
    if(dataL.title[0]?.toLowerCase()!==data[index-1].title[0]?.toLowerCase()){
      cur++;
      return newData.push([dataL]);
    }
    newData[cur].push(dataL);
  })
  return (
    <div>
      {newData.map((data) => (
        <div key={data[0].title[0]}>
          <h4>{data[0].title[0]?.toUpperCase()}</h4>
          <Cards data={data} />
        </div>
      ))}
    </div>
  )
}
