"use client";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";


export default function SearchInput() {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q")||"");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleKeyPress = (e:any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      router.push(`/search?q=${search}`);
    }
  };
  return (
    <>
      <img src="/search-icon.svg" alt="search icon" className="h-6 block relative" onClick={()=>setShow(!show)}/>
      {show && <div className="absolute top-[105%] right-0 w-1/5">
        <input type="text" name="search" className="w-full p-4 bg-black text-white rounded-xl" onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleKeyPress} value={search}/>
        {search && <span className="absolute top-1/2 right-4 -translate-y-1/2" onClick={(e)=>router.push(`/search?q=${search}`)}>→</span>}
        <span className="absolute bottom-2 bg-white h-[1px] w-4/5 left-1/2 -translate-x-1/2"></span>
      </div>}
    </>
  )
}
