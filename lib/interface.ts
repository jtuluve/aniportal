import { Document } from 'mongoose';


export type Anime = {
  _id: string;
  Score: number;
  Popularity: number;
  Rank: number;
  Members: number;
  Description: string;
  Synonyms: string;
  Japanese: string;
  English: string;
  Type: string;
  Episodes: number;
  Status: string;
  Aired: string;
  Premiered: string;
  Broadcast: string;
  Producers: string;
  Licensors: string;
  Studios: string;
  Source: string;
  Genres: string;
  Demographic: string;
  Duration: string;
  Rating: string;
  picture: string;
  thumbnail: string;
};

export interface AnimeDocument extends Document {
  Score: number;
  Popularity: number;
  Rank: number;
  Members: number;
  Description: string;
  Synonyms: string;
  Japanese: string;
  English: string;
  Type: string;
  Episodes: number;
  Status: string;
  Aired: string;
  Premiered: string;
  Broadcast: string;
  Producers: string;
  Licensors: string;
  Studios: string;
  Source: string;
  Genres: string;
  Demographic: string;
  Duration: string;
  Rating: string;
  picture: string;
  thumbnail: string;
}

export interface Admins {
  _id: string;
  username: string;
  password: string;
}