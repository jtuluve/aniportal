
import { getAnimeObjectById } from "@/lib/dbfunctions";
import { upsertAnimeAction } from "@/lib/functions";

export default async function Form({_id}:{_id?:string}) {
  const anime = _id ? await getAnimeObjectById(_id) : undefined;

  return (
    <>
      <form className="max-w-5xl mx-auto mt-8 py-3" action={upsertAnimeAction}>
        <h1 className="text-3xl">Edit anime</h1>
        <hr className="mb-4"/>
        { anime?._id && <input type="hidden" name="_id" defaultValue={anime?._id}/> }
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="English">English Title</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="English" defaultValue={anime?.English} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Japanese">Japanese</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Japanese" defaultValue={anime?.Japanese} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Score">Score</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="number" step={0.01} name="Score" max={10} defaultValue={anime?.Score} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Rank">Rank</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="number" name="Rank" defaultValue={anime?.Rank} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Description">Description</label>
          <textarea rows={10} className="block p-2 bg-slate-900 text-white rounded-md" name="Description" defaultValue={anime?.Description} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Synonyms">Synonyms(Separated by comma)</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Synonyms" defaultValue={anime?.Synonyms} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Type">Type</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Type" defaultValue={anime?.Type} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Episodes">Episodes</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="number" name="Episodes" defaultValue={anime?.Episodes} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Status">Status</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Status" defaultValue={anime?.Status} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Aired">Aired</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Aired" defaultValue={anime?.Aired} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Premiered">Premiered</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Premiered" defaultValue={anime?.Premiered} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Broadcast">Broadcast</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Broadcast" defaultValue={anime?.Broadcast} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Producers">Producers</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Producers" defaultValue={anime?.Producers} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Licensors">Licensors</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Licensors" defaultValue={anime?.Licensors} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Studios">Studios</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Studios" defaultValue={anime?.Studios} />
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Source">Source</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Source" defaultValue={anime?.Source} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="Genres">Genres</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="Genres" defaultValue={anime?.Genres} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="picture">Picture</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="picture" defaultValue={anime?.picture} required/>
        </div>
        <div className="mb-2 w-full grid gap-1 my-4">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input className="block p-2 bg-slate-900 text-white rounded-md" type="text" name="thumbnail" defaultValue={anime?.thumbnail} required/>
        </div>
        <button type="submit" className="block p-2 bg-green-600 text-white rounded-md">Submit</button>
      </form>
    </>
  )
}
