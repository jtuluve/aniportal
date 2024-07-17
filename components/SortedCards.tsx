"use client"
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Anime } from "@/lib/interface";
import { getSortedAnime } from "@/lib/dbfunctions";

interface Data {

}

export default function SortedCards({data}:{data:Array<{_id:string, data:Array<Pick<Anime,"English"|"Japanese"|"picture"|"thumbnail"> & {link:string}>}>|null}) {
  const [newData, setNewData] = useState(data || []);
  async function fetchData(n:number){
    const data = await getSortedAnime(n)||[];
    newData.push(...(data));
    setNewData([...newData]);
    if(data.length!=0){
      setTimeout(()=>fetchData(n+1), 5000);
    }
  }
  useEffect(()=>{fetchData(1)},[]);
  return (
    <div>
      {newData.map((d:any)=>
        <div key={d._id}>
        <h4>{d._id}</h4>
        <Cards data={d.data} />
        </div>
      )}
    </div>
  )
}
