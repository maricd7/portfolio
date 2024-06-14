import Image from "next/image";
import { Main } from "./components";
import { NewMain } from "./components";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="flex flex-col justify-between  my-8 w-full items-center">
      <NewMain />
      <Footer />
    </div>
  );
}
