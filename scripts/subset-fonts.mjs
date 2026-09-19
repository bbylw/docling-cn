import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import subsetFont from "subset-font";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "fonts");
mkdirSync(outDir, { recursive: true });

const collectText = (dir) => {
  let text = "";
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) text += collectText(p);
    else if (/\.(astro|tsx|ts|jsx)$/.test(entry)) text += readFileSync(p, "utf8");
  }
  return text;
};

const EXTRA = "，。、；：？！“”‘’（）《》【】0123456789";

const chars = new Set(collectText(join(root, "src")) + EXTRA);
const charset = [...chars].join("");
console.log(`subset charset: ${charset.length} unique chars`);

for (const weight of [400, 500, 600]) {
  const src = join(
    root,
    "node_modules",
    "@fontsource",
    "noto-sans-sc",
    "files",
    `noto-sans-sc-chinese-simplified-${weight}-normal.woff2`
  );
  const buf = readFileSync(src);
  const out = await subsetFont(buf, charset, { targetFormat: "woff2" });
  const dest = join(outDir, `noto-sans-sc-${weight}.woff2`);
  writeFileSync(dest, out);
  console.log(`noto-sans-sc-${weight}.woff2: ${(buf.length / 1024) | 0}KB -> ${(out.length / 1024) | 0}KB`);
}
