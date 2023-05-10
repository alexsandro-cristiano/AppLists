import LogoImg from "@/assets/images/logo.png";
import Image from "next/image";

interface ILogo {
  widthImage: number;
}

export default function Logo({ widthImage }: ILogo) {
  return <Image src={LogoImg} alt="logo da aplicação" height={widthImage} />;
}
