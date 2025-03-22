import {isValidEmailAddress, normalizeEmailAddress, parseEmailAddress} from './index.js';

/**
 * Parse email addresses into parts with `parseEmailAddress`. Returns `undefined` if the input is an
 * invalid email address.
 */

parseEmailAddress('simple@example.org'); // returns `{user: 'simple', domain: 'example.org', full: 'simple@example.org'}`
parseEmailAddress('tld-too-short@foo.x'); // returns `undefined`

/**
 * Normalize email addresses for string comparisons with `normalizeEmailAddress`. Returns
 * `undefined` if the input is an invalid email address.
 */

normalizeEmailAddress('SIMPLE@EXAMPLE.ORG'); // returns `'simple@example.org'`
normalizeEmailAddress('tld-too-short@foo.x'); // returns `undefined`

/** Check if an email address is valid with `isValidEmailAddress`. */

isValidEmailAddress('simple@example.org'); // returns `true`
isValidEmailAddress('SIMPLE@EXAMPLE.ORG'); // returns `true`
isValidEmailAddress('tld-too-short@foo.x'); // returns `false`
