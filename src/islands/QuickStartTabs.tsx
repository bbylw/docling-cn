import { useState, type KeyboardEvent } from "react";
import { Check, Copy } from "@phosphor-icons/react";

type Step = {
  id: string;
  label: string;
  note: string;
  lang: string;
  code: string;
};

const steps: Step[] = [
  {
    id: "install",
    label: "安装",
    note: "需要 Python 3.10 或更高版本。支持 macOS、Linux 与 Windows，x86_64 与 arm64 架构均可运行。",
    lang: "bash",
    code: "pip install docling",
  },
  {
    id: "cli",
    label: "命令行转换",
    note: "命令会在当前目录生成一个 .md 文件，包含结构化后的文档内容。",
    lang: "bash",
    code: "docling https://arxiv.org/pdf/2206.01062",
  },
  {
    id: "vlm",
    label: "VLM 管线",
    note: "通过 Docling CLI 使用 GraniteDocling 等视觉语言模型处理文档。",
    lang: "bash",
    code: "docling --pipeline vlm --vlm-model granite_docling \\\n  https://arxiv.org/pdf/2206.01062",
  },
  {
    id: "python",
    label: "Python 用法",
    note: "本地路径或 URL 均可，输出为 Markdown。更多进阶用法与配置选项请参阅文档。",
    lang: "python",
    code: [
      "from docling.document_converter import DocumentConverter",
      "",
      'source = "https://arxiv.org/pdf/2408.09869"  # 本地路径或 URL 均可',
      "converter = DocumentConverter()",
      "result = converter.convert(source)",
      'print(result.document.export_to_markdown())',
    ].join("\n"),
  },
];

export default function QuickStartTabs() {
  const [active, setActive] = useState(steps[0].id);
  const [copied, setCopied] = useState(false);
  const step = steps.find((s) => s.id === active)!;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(step.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + steps.length) % steps.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = steps.length - 1;
    if (next === -1) return;
    e.preventDefault();
    setActive(steps[next].id);
    setCopied(false);
    document.getElementById(`tab-${steps[next].id}`)?.focus();
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      <div
        role="tablist"
        aria-label="快速开始步骤"
        className="no-scrollbar flex overflow-x-auto border-b border-zinc-800"
      >
        {steps.map((s, i) => (
          <button
            key={s.id}
            id={`tab-${s.id}`}
            role="tab"
            type="button"
            aria-selected={s.id === active}
            aria-controls={`panel-${s.id}`}
            tabIndex={s.id === active ? 0 : -1}
            onKeyDown={(e) => onTabKeyDown(e, i)}
            onClick={() => {
              setActive(s.id);
              setCopied(false);
            }}
            className={
              "shrink-0 px-5 py-3 text-sm transition-colors " +
              (s.id === active
                ? "border-b-2 border-accent font-medium text-zinc-100"
                : "border-b-2 border-transparent text-zinc-500 hover:text-zinc-300")
            }
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${step.id}`}
        aria-labelledby={`tab-${step.id}`}
        className="relative"
      >
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-200 sm:p-6 sm:text-sm">
          <code>{step.code}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          aria-label="复制代码"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700/70 bg-zinc-900/80 text-zinc-400 transition-colors hover:text-zinc-100 active:scale-95"
        >
          {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? "代码已复制到剪贴板" : ""}
        </span>
      </div>

      <p className="border-t border-zinc-800 px-5 py-3.5 text-[13px] leading-relaxed text-zinc-500 sm:px-6">
        {step.note}
      </p>
    </div>
  );
}
