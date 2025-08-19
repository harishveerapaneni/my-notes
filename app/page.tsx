import { Button } from "@/components/ui/button";
import { LuArrowRightFromLine } from "react-icons/lu";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Our Website
        <Button variant="outline" className="ml-4">
          Get Started <LuArrowRightFromLine />
        </Button>
      </h1>
    </div>
  );
}
