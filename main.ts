import { mkdirSync, writeFileSync } from "node:fs";

// Most Boring Object Reviewed in One Line — v2
// One true, funny line about a rubber band: it holds on for years,
// then snaps at the worst moment, and still gets picked up first.
const line =
  "At 7:40 this morning, Pak Budi's rubber band snapped while holding his lunchbox shut. Rice everywhere. He picked up the band first. 'Six years,' he said. 'Six good years.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
const bytes = Buffer.byteLength(line, "utf8");
console.log(`wrote entry.txt (${line.length} chars, ${bytes} bytes) to ${outDir}`);
