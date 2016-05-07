'use strict';
/**
 * Possible Errors ESLint rules
 * For detailed rule explanations, see http://eslint.org/docs/rules/#possible-errors
 */
module.exports = {
    'rules': {
        // disallow use of debugger
        'no-debugger': 2,

        // disallow assignment in conditional expressions
        'no-cond-assign': [2, 'always'],

        // disallow trailing commas in object literals
        'comma-dangle': [2, 'never'],

        // disallow use of console
        'no-console': 1,

        // disallow duplicate arguments in functions
        'no-dupe-args': 2,

        // disallow duplicate keys when creating object literals
        'no-dupe-keys': 2,
        // disallow a duplicate case label.
        'no-duplicate-case': 2,

        // disallow empty statements
        'no-empty': 2,

        // disallow unnecessary parentheses
        'no-extra-parens': [2, 'functions'],

        // disallow unnecessary semicolons
        'no-extra-semi': 2,

        // disallow function or variable declarations in nested blocks
        'no-inner-declarations': 2,

        // disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 2,

        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 2,

        // disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 2
    }
};
