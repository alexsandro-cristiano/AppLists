import Image from "next/image";
import I from "../../assets/images/Frame 117.png";
interface ICard {
  url?: string;
  title?: string;
  description?: string;
}
export default function Card({ description, title, url }: ICard) {
  return (
    <div
      className={`w-[208px] h-[286px] object-cover overflow-hidden p-4 bg-zinc-900 rounded-lg`}
    >
      <div className={`h-[175px] w-[175px] rounded`}>
        <Image src={I} alt="" />
      </div>
      <section className={`mt-4 flex flex-col`}>
        <strong>title</strong>
        <span>descrition com 2 linhas...</span>
      </section>
    </div>
  );
}
