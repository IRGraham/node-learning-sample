'use strict';
/**
 * Code style ESLint rules
 * For detailed rule explanations, see http://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
    'rules': {
        //  specify whether double or single quotes should be used in JSX attributes
        'jsx-quotes': [2, 'prefer-single'],

        // disallow if as the only statement in an else block
        'no-lonely-if': 2,

        // require a capital letter for constructors
        'new-cap': [2, {'newIsCap': true }],

        // disallow nested ternary expressions
        'no-nested-ternary': 2,

        // disallow the use of Boolean literals in conditional expressions
        'no-unneeded-ternary': 2,

        // specify whether double or single quotes should be used
        'quotes': [2, 'single', 'avoid-escape'],

        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': [2, { 'min': 2, properties: 'never', exceptions: ['i', 'e', '_', '$'] }],

        'camelcase': [2, { 'properties': 'always' }]
    }
};
