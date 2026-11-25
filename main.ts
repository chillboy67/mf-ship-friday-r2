// mf-ship-friday-r2: one Ship It Friday line, written out for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "fix: removed the bug where production worked. It now fails faster, on a Friday, in front of everyone. You are welcome.";

// The entry is exactly one line: the commit message above, plus a trailing newline.
// The grader reads it back from entry.txt in the output directory.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
console.log("Wrote entry.txt");
