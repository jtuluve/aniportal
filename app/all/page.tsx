import SortedCards from "@/components/SortedCards";
import { getSortedAnime } from "@/lib/dbfunctions";

export default async function All() {
  let data = await getSortedAnime();
  let newdata = data?.map((data) => ({
    title: data.English || data.Japanese,
    image: data.picture || data.thumbnail,
    link: `/anime/${data._id}`,
  }))
  return (
    <main className="max-w-[1200px] mx-auto mt-8">
      {<SortedCards data={newdata||[]} />}
    </main>
  )
}
