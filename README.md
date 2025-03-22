# parse-email-address

Parse, validate, and normalize email addresses, primarily using RFC-5321.

Full docs: https://electrovir.github.io/parse-email-address

This uses and is based on [`smtp-address-parser` v1.1.0](https://www.npmjs.com/package/smtp-address-parser/v/1.1.0), so it has the following features (from `smtp-address-parser`):

-   Domain names must be fully qualified (they must have at least two labels). The top-level domain must have at least two octets.
    -   good: `name@example.org`
    -   bad: `name@example`
    -   bad: `name@example.x`
-   Total length limit of an address is 986 octets (based on a 1,000 octet SMTP line length).
-   Domain names are limited to 255 octets, when encoded with a length byte before each label, and including the top-level zero length label. So, the effective limit with interstitial dots is 253 octets.
-   Labels within a domain name are limited to 63 octets (limits of the DNS protocol).

This package adds the following features:

-   Full ESM support (this package natively runs in all modern browsers).
-   Documentation.
-   More explicit types.
-   Simplified API.
-   No dependencies.

## install

```sh
npm i parse-email-address
```

## usage

<!-- example-link: src/examples.example.ts -->

```TypeScript
import {isValidEmailAddress, normalizeEmailAddress, parseEmailAddress} from 'parse-email-address';

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
```
