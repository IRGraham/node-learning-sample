'use strict';
/**
 * ES6 ESLint rules
 * For detailed rule explanations, see http://eslint.org/docs/rules/#ecmascript-6
 */
module.exports = {
    'env': {
        'es6': false
    },
    'ecmaFeatures': {
        'arrowFunctions': true,
        'blockBindings': true,
        'classes': true,
        'defaultParams': true,
        'destructuring': true,
        'forOf': true,
        'generators': false,
        'modules': true,
        'objectLiteralComputedProperties': true,
        'objectLiteralDuplicateProperties': false,
        'objectLiteralShorthandMethods': true,
        'objectLiteralShorthandProperties': true,
        'spread': true,
        'superInFunctions': true,
        'templateStrings': true,
        'jsx': true
    },
    'rules': {
        // require parens in arrow function arguments
        'arrow-parens': 2,

        // disallow modifying variables that are declared using const
        'no-const-assign': 2,

        // require let or const instead of var
        'no-var': 2,

        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 2,

        //suggest using template literals instead of strings concatenation
        'prefer-template': 2
    }
};
