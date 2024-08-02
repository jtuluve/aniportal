import Card from "./Card";
import { Anime } from "@/lib/interface";

interface Data {
  English: string;
  Japanese: string;
  thumbnail: string;
  picture: string;
  link: string;
}

export default function Cards({
  data,
}: {
  data:
    | Array<{ title: string; image: string; link: string }>
    | Array<
        Pick<Anime, "English" | "Japanese" | "picture" | "thumbnail"> & {
          link: string;
        }
      >
    | null;
}) {
  return (
    <div className="flex justify-around flex-wrap mt-8 mb-20 gap-[2rem_1rem]">
      {data?.map((data:any) => (
        <Card
          key={data.link}
          title={data.English || data.title}
          image={data.image || data.thumbnail || data.picture}
          link={data.link}
        />
      ))}
    </div>
  );
}
