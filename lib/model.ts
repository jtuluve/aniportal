import mongoose from "mongoose";
import { Anime, AnimeDocument } from "./interface";

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

export const AnimeModel = mongoose.models?.anime as mongoose.Model<Anime> || mongoose.model<Anime>("anime", AnimeSchema);
