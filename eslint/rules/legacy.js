'use strict';
/**
 * Legacy ESLint rules
 * For detailed rule explanations, see http://eslint.org/docs/rules/#legacy
 */
module.exports = {
    'rules': {
        // specify the maximum depth that blocks can be nested
        'max-depth': [0, 3],

        // limits the number of parameters that can be used in the function declaration
        'max-params': [0, 4],

        // specify the maximum number of statement allowed in a function
        'max-statements': [1, 15]
    }
};
