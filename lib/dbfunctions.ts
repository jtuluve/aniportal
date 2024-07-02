"use server";
import mongoose from "mongoose";
import { AnimeModel, AdminsModel } from "./model";
import { Admins, Anime, AnimeDocument } from "./interface";
import { getServerSession } from "next-auth";
import { MongoClient } from "mongodb";
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
    if(!await connect()) return null;
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
    if(!await connect()) return null;
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
    if(!await connect()) return null;
    return JSON.parse(JSON.stringify(await AnimeModel.find({
      $or: [
        { English: { $regex: `.*${name}.*`, $options: 'i' } },
        { Synonyms: { $regex: `.*${name}.*`, $options: 'i' } },
      ],
    }))) as Anime[];
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getAnimeById(id:string) {
  try {
    if(!await connect()) return null;
    return await AnimeModel.findById(id);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getAnimeObjectById(id:string) {
  try {
    if(!await connect()) return null;
    return JSON.parse(JSON.stringify(await AnimeModel.findById(id))) as Anime;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getSortedAnime(){
  try {
    if(!await connect()) return null;
    return await AnimeModel.find({}).collation({locale:"en",caseLevel:true}).sort({English:1});
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function upsertAnime(data:Anime) {
  try{
    let session = await getServerSession();
    if(!session?.user) return null;
    if(!await connect()) return null;
    const {_id, ...rest} = data;
    if(_id) {
      await AnimeModel.findByIdAndUpdate(_id, rest, {new:true});
      return true;
    }
    await AnimeModel.create(data);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function deleteAnime(id:string) {
  try{
    let session = await getServerSession();
    if(!session?.user) return null;
    if(!await connect()) return null;
    await AnimeModel.findByIdAndDelete(id);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

export async function getPopularAnimes(){
  try {
    const client = await MongoClient.connect(process.env.MONGO_URL as string);
    const db = client.db();
    const collection = db.collection('famanime');
    // let data = await AnimeModel.find({English:{$regex:/.*berserk.*/i}}) as AnimeDocument[];
    // collection.insertMany(data as any);
    let data = await collection.find().toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    console.error(e);
    return null;
  }
}


export async function adminLogin({username, password}: {username:string, password:string}) {
  try {
    if(!await connect()) return null;
    const user = await AdminsModel.findOne({username, password});
    return user ? JSON.parse(JSON.stringify(user)) as Admins: null;
  } catch (e) {
    console.error(e);
    return null;
  }
}