import { Armchair } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="items-center justify-center hidden p-2 text-white rounded-lg lg:flex bg-primary"
    >
      <Armchair className="w-8 h-8" />
    </Link>
  );
}
