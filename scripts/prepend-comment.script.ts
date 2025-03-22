/**
 * Prepends a `node:coverage disable` comment to `src/grammar.ts`.
 *
 * While almost all of `grammar.ts` _is_ actually covered, there are some rule post-processors (like
 * `Reverse_path$string$1`'s postprocess) that never get fired and, since there is 100% coverage in
 * everything else, will actually never get fired. Rather than trying to figure out how to remove
 * the unused post-processors from the original `grammar.ne` file (which I don't understand), I'm
 * just ignoring the `grammar.ts` output file.
 */

import {close, openSync, writeSync} from 'node:fs';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';

const grammarTsPath = resolve(import.meta.dirname, '..', 'src', 'grammar.ts');

const data = await readFile(grammarTsPath);
const fileHandle = openSync(grammarTsPath, 'w+');
const insert = Buffer.from('/* node:coverage disable */\n');
writeSync(fileHandle, insert, 0, insert.length, 0);
writeSync(fileHandle, data, 0, data.length, insert.length);
close(fileHandle);
