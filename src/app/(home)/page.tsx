import Image from "next/image";
import { Tweet } from "./Tweet";

export default function Home() {
  return (
    <Tweet tweet={{
      author: "Me",
      text: "Random text"
    }}/>
  );
}
