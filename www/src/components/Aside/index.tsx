import { Home, Plus, Search } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";

export default function Aside() {
  return (
    <aside
      className={`border-r border-zinc-500 bg-zinc-950 
      w-60
      p-6 overflow-y-scroll scrollbar-hide`}
    >
      <Logo widthImage={80} />
      <nav className={`space-y-5 mt-10 flex flex-col`}>
        <Link
          href="/dashboard"
          className={`flex gap-3 text-zinc-400 hover:text-zinc-200 duration-300 ease-in-out`}
        >
          <Home size={20} strokeWidth={2} /> Início
        </Link>
        <Link
          href="/search"
          className={`flex gap-3 text-zinc-400 hover:text-zinc-200 duration-300 ease-in-out`}
        >
          <Search size={20} strokeWidth={2} />
          Buscar
        </Link>
        <Link
          href="/playlist"
          className={`flex gap-3 text-zinc-400 hover:text-zinc-200 duration-300 ease-in-out`}
        >
          <Plus
            size={20}
            strokeWidth={2}
            className="rounded-md bg-secundary/40 p-2 w-7 h-7"
          />
          <span className="">Criar playlist</span>
        </Link>
      </nav>
      <div className="border border-zinc-700 mt-12 mb-12" />
      <div>Sair</div>
    </aside>
  );
}
