import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarNavProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
  href: string;
  active: boolean;
}

const SidebarNav: React.FC<SidebarNavProps> = ({
  icon,
  title,
  className,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-4 rounded-xl px-4 py-2 transition-all hover:bg-gray-50",
        className,
        active && "bg-gray-100",
      )}
    >
      {icon}
      <p className="text-base font-medium tracking-tighter">{title}</p>
    </Link>
  );
};

export default SidebarNav;
