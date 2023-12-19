module.exports = {
    extends: ['airbnb', 'plugin:import/recommended', 'prettier', 'prettier/prettier'],
    env: {
        jest: true,
    },
    rules: {
        'import/no-unresolved': 'off',
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    },
};
