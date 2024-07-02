"use client"
import { deleteAnime } from '@/lib/dbfunctions'
import React, { useState } from 'react'

export default function DeleteButton({id}:{id:string}) {
  const [ deleteState, setDeleteState ] = useState<"none"|"done"|"failed">("none");
  const handleDelete = async () => {
    setDeleteState("none");
    const res = await deleteAnime(id);
    if(res) setDeleteState("done");
    else setDeleteState("failed");
  }
  return (
    <>
      <button className="bg-red-700 p-1" onClick={async()=>await deleteAnime(id)}>Delete</button>
      {deleteState == "none" ? <></> : deleteState == "failed" ? <p className="text-white bg-red-700 fixed bottom-8 right-8 rounded-md">Failed to delete</p> : <p className='text-white bg-green-700 fixed bottom-8 right-8 rounded-md'>Done</p>}
    </>
  )
}
