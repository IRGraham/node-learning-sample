'use strict';
/**
 * Best practices ESLint rules
 * For detailed rule explanations, see http://eslint.org/docs/rules/#best-practices
 */
module.exports = {
    'rules': {
        // treat var statements as if they were block scoped
        'block-scoped-var': 2,

        // specify the maximum cyclomatic complexity allowed in a program
        'complexity': [0, 15],

        // specify curly brace conventions for all control statements
        'curly': [2, 'multi-line'],

        // encourages use of dot notation whenever possible
        'dot-notation': [2, { 'allowKeywords': true }],

        // require the use of === and !==
        'eqeqeq': 2,

        // make sure for-in loops have an if statement
        'guard-for-in': 2,

        // disallow use of arguments.caller or arguments.callee
        'no-caller': 2,

        // disallow else after a return in an if
        'no-else-return': 2,

        // disallow use of eval()
        'no-eval': 2,

        // disallow adding to native types
        'no-extend-native': 2,

        // disallow unnecessary function binding
        'no-extra-bind': 2,

        // disallow fallthrough of case statements
        'no-fallthrough': 2,

        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 2,

        // disallow unnecessary nested blocks
        'no-lone-blocks': 2,

        // disallow creation of functions within loops
        'no-loop-func': 2,

        // disallow use of multiple spaces
        'no-multi-spaces': 2,

        // disallow reassignments of native objects
        'no-native-reassign': 2,

        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 2,

        // disallow use of new operator for Function object
        'no-new-func': 2,

        // disallows creating new instances of String,Number, and Boolean
        'no-new-wrappers': 2,

        // disallow reassignment of function parameters
        'no-param-reassign': 2,

        // disallow declaring the same variable more then once
        'no-redeclare': 2,

        // disallow use of assignment in return statement
        'no-return-assign': 2,

        // disallow use of `javascript:` urls.
        'no-script-url': 2,

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,

        // restrict what can be thrown as an exception
        'no-throw-literal': 2,

        // disallow usage of expressions in statement position
        'no-unused-expressions': 2,

        // disallow unnecessary .call() and .apply()
        'no-useless-call': 2,

        // require use of the second argument for parseInt()
        'radix': 2,

        // requires to declare all vars on top of their containing scope
        'vars-on-top': 2,

        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': [2, 'any'],

        // require or disallow Yoda conditions
        'yoda': 2
    }
};
