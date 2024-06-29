"use server";
import mongoose from "mongoose";
import { AnimeModel } from "./model";
import { Anime, AnimeDocument } from "./interface";
let isConnected = false;
export async function connect() {
  if(isConnected) return true;
  try {
    if(!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined");
    }
    await mongoose.connect(process.env.MONGO_URL as string);
    isConnected = true;
    return true;
  } catch {
    console.log("Could not connect to database");
    return false;
  }
}

export async function getAllAnimes() {
  try {
    await connect();
    if(!isConnected) return null;
    await AnimeModel.deleteMany({picture:{$regex:/.*raw\.github.*/}})
    console.log("done")
    return JSON.parse(JSON.stringify(await AnimeModel.find({}))) as Anime[];
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getAnimesByChar(char:string) {
  try {
    await connect();
    if(!isConnected) return null;
    return await AnimeModel.find({
      English: { $regex: /${char}.*/i },
    });
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getAnimesByName(name:string) {
  try {
    await connect();
    if(!isConnected) return null;
    return await AnimeModel.find({
      English: { $regex: /.*${name}.*/i },
      Synonyms: { $elemMatch: { $regex: /.*${name}.*/i } },
    });
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getAnimeById(id:string) {
  try {
    await connect();
    if(!isConnected) return null;
    return await AnimeModel.findById(id);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getAnimeObjectById(id:string) {
  try {
    await connect();
    if(!isConnected) return null;
    return JSON.parse(JSON.stringify(await AnimeModel.findById(id))) as Anime;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getSortedAnime(){
  try {
    await connect();
    if(!isConnected) return null;
    return await AnimeModel.find({}).collation({locale:"en",caseLevel:true}).sort({English:1});
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function upsertAnime(data:Anime) {
  try{
    await connect();
    if(!isConnected) return null;
    const {_id, ...rest} = data;
    if(_id) {
      return JSON.parse(JSON.stringify(await AnimeModel.findByIdAndUpdate(_id, rest, {new:true}))) as Anime;
    }
    return await JSON.parse(JSON.stringify(AnimeModel.create(data)));
  } catch (e) {
    console.error(e);
  }
}

export async function deleteAnime(id:string) {
  try{
    await connect();
    if(!isConnected) return null;
    await AnimeModel.findByIdAndDelete(id);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}