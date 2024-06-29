import Image from "next/image";
import SearchInput from './SearchInput';

export default function Navbar() {
  return (
    <nav className="w-4/5 mx-auto sticky z-10 top-4 bg-[rgba(138,138,138,30%)] flex items-center rounded-lg left-[10%] px-2 *:cursor-pointer backdrop-blur-sm">
      <a href="/" className="block mr-auto">
        <Image width={100} height={56} src="/logo-rect-white.png" alt="logo" className="h-14 mx-2 my-2"/>
      </a>
      <ul className="list-none flex gap-2 w-2/5 max-w-64 justify-around">
        <li><a href="/popular">MOST POPULAR</a></li>
        <li><a href="/all">A-Z</a></li>
        <li>
          <SearchInput/>
        </li>
      </ul>
    </nav>
  )
}
