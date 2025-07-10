import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
//Material Tailwind UI Lib ThemeProvider
import { ThemeProvider } from "@/components/material_tailwind";
import { poppins } from "./fonts/next_font";


export const metadata = {
  title: "M.Azeem Portfolio",
  description: "Muhammad Azeem is a Next.js / React.js developer, graduated as a Software Engineer, worked as a React.js developer in a repotable software company. Further details are mentioned in Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased min-h-screen w-full max-w-[1440px] flex flex-col`}
      >
        {/* bg-blue-500/50  */}
        <div className="-z-10 w-screen h-[10px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[10px] blur-2xl" />
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 pt-[80px]">
            {children}
          </div>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
