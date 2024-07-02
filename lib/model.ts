import mongoose from "mongoose";
import { Anime, Admins } from "./interface";

const AnimeSchema = new mongoose.Schema({
  Score: { type: Number },
  Popularity: { type: Number },
  Rank: { type: Number, unique: true },
  Members: { type: Number },
  Description: { type: String },
  Synonyms: { type: String },
  Japanese: { type: String },
  English: { type: String },
  Type: { type: String },
  Episodes: { type: Number },
  Status: { type: String },
  Aired: { type: String },
  Premiered: { type: String },
  Broadcast: { type: String },
  Producers: { type: String },
  Licensors: { type: String },
  Studios: { type: String },
  Source: { type: String },
  Genres: { type: String },
  Demographic: { type: String },
  Duration: { type: String },
  Rating: { type: String },
  picture: { type: String },
  thumbnail: { type: String },
}, { collection: "anime2" });

const AdminsSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
},{collection: "admins"});

export const AnimeModel = mongoose.models?.anime as mongoose.Model<Anime> || mongoose.model<Anime>("anime", AnimeSchema);
export const AdminsModel = mongoose.models?.admins as mongoose.Model<Admins> || mongoose.model<Admins>("admins", AdminsSchema);
