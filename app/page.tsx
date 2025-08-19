import { Button } from "@/components/ui/button";
import { LuArrowRightFromLine } from "react-icons/lu";

export default function Home() {
  return (
    <div>
      <div className="flex border gap-6 p-10  border-gray-700">
        <div className="w-96 border rounded-2xl min-h-screen border-gray-700 flex-none ...">
          01
        </div>
        <div className=" border min-h-screen rounded-2xl  border-gray-700 flex-1 ...">
          02
        </div>
      </div>
    </div>
  );
}
