import Image from "next/image";
import { Main } from "./components";
export default function Home() {
  return (
    <div className="flex flex-col justify-between mx-auto my-8 max-w-3xl items-start  ">
      <Main />
    </div>
  );
}
