"use client"

import Cards from "@/components/Cards";
import { getAnimesByName } from "@/lib/dbfunctions";
import { Anime } from "@/lib/interface";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function page() {
  const searchParams = useSearchParams()
  const [animes, setAnimes] = useState<{title: string,image: string,link: string}[]|"loading">("loading");
  
  useEffect(()=>{
    if(!searchParams.get("q")) return;
    (async()=>{
      let d = await getAnimesByName(searchParams.get("q") as string);
      let newdata = d?.map((data) => ({
        title: data.English || data.Synonyms || data.Japanese,
        image: data.picture || data.thumbnail,
        link: `/anime/${data._id}`,
      }))
      setAnimes(newdata||[])
    })()
  },[searchParams])
  if(animes==="loading") return <p className="text-white max-w-[1200px] mx-auto mt-8">Loading...</p>
  return (
    <main className="max-w-[1200px] mx-auto mt-8">
      {animes.length>0 ? <Cards data={animes} /> : <p className="text-white">No results</p>}
    </main>
  )
}
