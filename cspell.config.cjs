const {baseConfig} = require('@virmator/spellcheck/configs/cspell.config.base.cjs');

module.exports = {
    ...baseConfig,
    ignorePaths: [
        ...baseConfig.ignorePaths,
        'src/grammar.ts',
        'src/grammar.ne',
    ],
    words: [
        ...baseConfig.words,
        'hightower',
        'kartik',
        'nearley',
        'nearleyc',
        'nonterminal',
        'radvan',
        'mailhost',
        'uucp',
        'bangified',
        'mailserver',
    ],
};
