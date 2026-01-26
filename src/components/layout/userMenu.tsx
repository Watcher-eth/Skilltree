"use client";

import * as React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onSelect?: () => void;
  disabled?: boolean;
};

function RightIcon({ icon }: { icon?: React.ReactNode }) {
  if (!icon) return null;

  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as any, {
      className: cn("h-[18px] w-[18px]", (icon as any).props?.className),
    });
  }

  return <span className="h-[18px] w-[18px]">{icon}</span>;
}

function MenuRow({ item, onDone }: { item: Item; onDone: () => void }) {
  const row = cn(
    "h-10 w-full px-[14px]",
    "flex items-center",
    "text-[16px] font-medium tracking-[-0.01em]",
    "text-black/90",
    "select-none",
    "hover:bg-black/[0.04] active:bg-black/[0.07]",
    "focus:outline-none focus-visible:bg-black/[0.06]",
    item.disabled && "opacity-40 pointer-events-none"
  );

  const content = (
    <>
      <span className="leading-none">{item.label}</span>
      <span className="ml-auto text-black/35">
        <RightIcon icon={item.icon} />
      </span>
    </>
  );

  if (item.href) {
    return (
      <Link
        href={item.href}
        className={row}
        onClick={() => onDone()}
        aria-disabled={item.disabled}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={row}
      onClick={() => {
        item.onSelect?.();
        onDone();
      }}
      disabled={item.disabled}
    >
      {content}
    </button>
  );
}

export function UserMenu({
  trigger,
  userId,
}: {
  trigger: React.ReactNode;
  userId?: string;
}) {
  const [open, setOpen] = React.useState(false);

  const items: Item[] = [
    {
      label: "Profile",
      icon: <User />,
      href: userId ? `/u/${userId}` : "/",
      disabled: !userId,
    },
    {
      label: "Logout",
      icon: <LogOut />,
      onSelect: () => signOut({ callbackUrl: "/" }),
    },
  ];

  return (
    <DropdownMenu  open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        side="bottom"
        sideOffset={10}
        className={cn(
          "min-w-[160px]",
          "p-0 overflow-hidden",
          "rounded-[18px]",
          // iOS frosted white card vibe
          "bg-white/90 backdrop-blur-xl",
          "border border-black/10",
          "shadow-[0_18px_60px_rgba(0,0,0,0.12)]",
          "outline-none"
        )}
      >
        <div className="flex flex-col divide-y divide-black/10">
          {items.map((it, i) => (
            <MenuRow key={i} item={it} onDone={() => setOpen(false)} />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}