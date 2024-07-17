import Cards from "@/components/Cards";
import SortedCards from "@/components/SortedCards";
import { getSortedAnime } from "@/lib/dbfunctions";

export default async function All() {
  let data = await getSortedAnime();
  return (
    <main className="max-w-[1200px] mx-auto mt-8">
      <SortedCards data={data}/>
    </main>
  )
}
