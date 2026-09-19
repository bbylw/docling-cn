import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "#features", label: "功能特性" },
  { href: "#quickstart", label: "快速开始" },
  { href: "#latest", label: "最新变化" },
  { href: "#integrations", label: "集成" },
  { href: "https://docling-project.github.io/docling/", label: "文档", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo-64.png" alt="Docling" width={28} height={28} className="h-7 w-7" decoding="async" />
          <span className="text-[15px] font-semibold tracking-tight text-zinc-100">Docling</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="relative py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent/70 after:transition-transform after:duration-300 hover:after:scale-x-100"
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
        <nav className="menu-slide border-t border-zinc-800/60 bg-zinc-950 px-4 pb-4 lg:hidden" aria-label="移动导航">
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
