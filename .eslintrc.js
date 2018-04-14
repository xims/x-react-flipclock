module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        // "no-unused-vars": [
        //     "off"
        // ],
        // "no-undef": [
        //     "off"
        // ],
        // "no-mixed-spaces-and-tabs": [
        //     "off"
        // ],
        // "no-console": [
        //     "off"
        // ],
        // "no-unreachable": [
        //     "off"
        // ]
    }
};