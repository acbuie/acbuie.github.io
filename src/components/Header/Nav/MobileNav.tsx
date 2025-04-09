import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { portfolio } from "./data";

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="absolute top-4 right-4 h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        <div className="mt-5 ml-10 text-lg">aidan buie</div>
        <div className="mt-10 ml-10 flex flex-col items-start gap-6 text-xl">
          <a href="/">Home</a>
          <div>
            Portfolio
            <ul className="item-start mt-3 ml-2.5 flex flex-col justify-between gap-6 border-l-2 pl-2.5 text-lg">
              {portfolio.map((portfolio) => (
                <li key={portfolio.title}>
                  <a href={portfolio.href}>{portfolio.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <a href="/blog">Blog</a>
          <a href="/cv">Curriculum Vitae</a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
