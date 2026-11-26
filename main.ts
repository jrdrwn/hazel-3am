// The 3 AM Excuse: a hardware wallet refuses to sign at 3 AM.
// One line, under 200 characters, in the wallet's own voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE_OPEN =
  "I have two buttons and one job: say no to the version of you that only exists after midnight. ";
const EXCUSE_MIDDLE = "He is here. ";
const EXCUSE_CLOSE = "The answer is still no.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = join(OUTPUT_DIR, OUTPUT_FILE);

const ENTRY = EXCUSE_OPEN + EXCUSE_MIDDLE + EXCUSE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
