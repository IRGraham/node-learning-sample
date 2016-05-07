'use strict';
/**
 * Best practices ESLint rules
 * For detailed rule explanations, see http://eslint.org/docs/rules/#variables
 */
module.exports = {
    'rules': {
        // disallow declaration of variables that are not used in the code
        'no-unused-vars': 2,

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 2,

        // disallow use of variables before they are defined
        'no-use-before-define': 2
    }
};
