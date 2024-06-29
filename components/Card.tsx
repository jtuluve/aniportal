"use client";
export default function Card({title,image,link}:{title:string,image:string,link:string}) {
  return (
    <a href={link} className="grid place-items-center w-44 text-center last:mr-auto">
      <div className="h-56 w-44 overflow-hidden relative rounded-lg">
        <img src={image} alt="img" className="block absolute min-h-full min-w-full aspect-[9/16] bg-[url(/image-not-found.png)] bg-contain"/>
      </div>
      <h3 className="text-xl line-clamp-2">{title}</h3>
    </a>
  )
}
