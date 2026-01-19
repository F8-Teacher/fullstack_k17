import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "./lib/utils";
import LoginModal from "./components/LoginModal";
export default function App() {
  const [isActive, setActive] = useState(false);
  const [theme, setTheme] = useState("light");
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    document.querySelector("html").className = theme;
  }, [theme]);
  return (
    <div>
      <h1 className="text-3xl">Shadcn</h1>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </Button>
      {/* <Button
        className="px-5 py-2 rounded-full bg-green-600 hover:bg-red-600"
        size={null}
      >
        Click me
      </Button>
      <Button
        variant="outline"
        className="border-red-700 text-red-700 hover:bg-amber-400"
      >
        Click me 2
      </Button>
      <Button size="icon">
        <ArrowRight />
      </Button> */}
      <div className="max-w-1/2 mx-auto">
        <Button
          className="dark:text-yellow-600"
          onClick={() => setActive(!isActive)}
        >
          Click me
        </Button>
        <div
          className={cn(
            "border border-red-600 p-3",
            isActive && "text-red-600 bg-amber-500",
            {
              "text-xl": isActive,
            },
          )}
        >
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            magnam. Minima eveniet voluptate sunt ex similique eaque, architecto
            voluptatum tempora hic illo! Consectetur, nihil vero. Dignissimos
            maxime repellendus officia rem.
          </p>
        </div>
        <Button onClick={() => setOpenModal(true)}>Login</Button>
        <LoginModal openModal={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
}
