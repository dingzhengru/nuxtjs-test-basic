module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'vue/html-indent': ['warn', 4],
        'vue/script-indent': ['warn', 4],
        'indent': ['warn', 4],
        'vue/no-trailing-spaces': 'off',
        'no-trailing-spaces': 'off',
        'object-shorthand': 'warn',
        'space-before-function-paren': ['warn', 'always'],
        'eol-last': ['warn', 'always'],
        'vue/no-unused-vars': 'warn',
        'vue/max-attributes-per-line': 'off'
    }
}
