import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ShoppingCart, User } from "lucide-react";

interface headerProps {
  className?: string;
}

export const Header = ({ className }: headerProps) => {
  return (
    <div className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35}></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-1">
            <User width={16} height={16} />
            Войти
          </Button>

          <Button className="group relative">
            <b>520</b>
            TODO 123
            <span className="h-full w-[1px] bg-white/30 mx-3" />
            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
              <b>3</b>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};
