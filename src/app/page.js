import About from "@/components/links/About";
import Home from "@/components/links/Home";
import Home2 from "@/components/links/Home2";
import LinksDrawer from "@/components/links/LinksDrawer";
import Image from "next/image";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <Home /> */}
      <Home2 />
      <LinksDrawer />
    </div>
  );
}
