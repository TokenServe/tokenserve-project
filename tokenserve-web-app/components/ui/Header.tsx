import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/" className="text-2xl font-bold">
          <span className="text-green-500">Token</span>Serve
        </Link>
        <nav className="hidden md:block">{/* Add navigation items here */}</nav>
      </div>
    </header>
  );
}
