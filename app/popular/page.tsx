import Cards from "@/components/Cards";
import { getPopularAnimes, getSortedAnime } from "@/lib/dbfunctions";

export default async function All() {
  let data = await getPopularAnimes();
  let newdata = data?.map((data:any) => ({
    title: data.English || data.Japanese,
    image: data.picture || data.thumbnail,
    link: `/anime/${data._id}`,
  }))
  return (
    <main className="max-w-[1200px] mx-auto mt-8">
      {<Cards data={newdata||[]} />}
    </main>
  )
}
