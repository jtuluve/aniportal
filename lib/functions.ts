"use server";
import { upsertAnime } from "./dbfunctions";
import { Anime, AnimeDocument } from "./interface";

export async function upsertAnimeAction(data:FormData) {
  try {
    const anime = Object.fromEntries(data);
    return await upsertAnime(anime as unknown as Anime);
  } catch (e) {
    console.error(e);
  }
}
