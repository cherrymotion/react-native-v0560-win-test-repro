module.exports = {
    preset: 'react-native',
    collectCoverageFrom: [
        '**/*.{js}',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/native-base-theme/**'
    ],
    testPathIgnorePatterns: [
        '/node_modules/'
    ],
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(react-native|native-base)/)'
    ],
    setupFiles: [
        './testSetup.js'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/common/testHelpers/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/common/testHelpers/assetsTransformer.js'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleDirectories: [
        'node_modules'
    ]
};
