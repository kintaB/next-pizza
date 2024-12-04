import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children} dasldkasl;3123123123123;l dasldkasl;dkkasdk;l dasldsadsadaddkasl;dkkasdk;l dasldkasl;dkkasdk;l</div>
  );
};
