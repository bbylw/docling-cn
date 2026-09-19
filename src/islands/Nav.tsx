import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Logo from "./Logo";

const links = [
  { href: "#features", label: "功能特性" },
  { href: "#quickstart", label: "快速开始" },
  { href: "#latest", label: "最新变化" },
  { href: "#integrations", label: "集成" },
  { href: "https://docling-project.github.io/docling/", label: "文档", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-tight text-zinc-100">Docling</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/docling-project/docling"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-950 transition-transform hover:-translate-y-px active:translate-y-0"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 hover:bg-zinc-900 lg:hidden"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-zinc-800/60 bg-zinc-950 px-4 pb-4 lg:hidden" aria-label="移动导航">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="block py-3 text-sm text-zinc-300 hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/docling-project/docling"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-950"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
