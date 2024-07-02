
import { getAnimeObjectById } from "@/lib/dbfunctions";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { getServerSession } from "next-auth";

export default async function AnimeDetails({params}:{params:{id:string}}) {
  let anime = await getAnimeObjectById(params.id);
  
  const session = await getServerSession();
  if(!anime){
    return <div>Page not found</div>
  }
  
  return (
    <div className="p-6 max-w-5xl mx-auto relative">
      {session?.user && <div className="absolute top-16 right-1 grid grid-cols-2 rounded overflow-hidden">
        <Link href={`/anime/${anime._id}/edit`} className="bg-green-700 p-1 text-center block">Edit</Link>
        <DeleteButton id={anime?._id as string}/>
      </div>}
      <div className="fixed w-screen h-screen grid place-items-center left-0 top-0 -z-10 blur-xl opacity-30 bg-[url(/image-not-found.png)] bg-contain">
        <img src={anime.picture} alt={`${anime.English} poster`} className="w-full absolute" />
      </div>
      <h1 className="text-2xl font-bold mb-4">{anime.English} ({anime.Japanese})</h1>
      <div className="grid md:grid-cols-3 gap-x-3 grid-cols-1">
        <div className="md:col-span-1">
         <img src={anime.picture} alt={`${anime.English} poster`} className="block w-4/5 max-w-sm mx-auto rounded-lg" />
        </div>
        <div className="md:col-start-2 md:col-span-2">
          <p className="mb-2"><strong className="tracking-wider">Score:</strong> {anime.Score}/10</p>
          <p className="mb-2"><strong  className="tracking-wider">Rank:</strong> {anime.Rank}</p>
          <p className="mb-4"><strong className="tracking-wider">Description:</strong> {anime.Description}</p>
          <p className="mb-2"><strong className="tracking-wider">Synonyms:</strong> {anime.Synonyms}</p>
          <p className="mb-2"><strong className="tracking-wider">Type:</strong> {anime.Type}</p>
          <p className="mb-2"><strong className="tracking-wider">Episodes:</strong> {anime.Episodes}</p>
          <p className="mb-2"><strong className="tracking-wider">Status:</strong> {anime.Status}</p>
          <p className="mb-2"><strong className="tracking-wider">Aired:</strong> {anime.Aired}</p>
          <p className="mb-2"><strong className="tracking-wider">Premiered:</strong> {anime.Premiered}</p>
          <p className="mb-2"><strong className="tracking-wider">Broadcast:</strong> {anime.Broadcast}</p>
          <p className="mb-2"><strong className="tracking-wider">Producers:</strong> {anime.Producers}</p>
          <p className="mb-2"><strong className="tracking-wider">Licensors:</strong> {anime.Licensors}</p>
          <p className="mb-2"><strong className="tracking-wider">Studios:</strong> {anime.Studios}</p>
          <p className="mb-2"><strong className="tracking-wider">Source:</strong> {anime.Source}</p>
          <p className="mb-2"><strong className="tracking-wider">Genres:</strong> {anime.Genres}</p>
          <p className="mb-2"><strong className="tracking-wider">Demographic:</strong> {anime.Demographic}</p>
          <p className="mb-2"><strong className="tracking-wider">Duration:</strong> {anime.Duration}</p>
          <p className="mb-4"><strong className="tracking-wider">Rating:</strong> {anime.Rating}</p>
        </div>
      </div>
    </div>
  );
}

