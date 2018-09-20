module.exports = {
    "extends": "airbnb",
    "env": {
      "browser": true,
    },
    "rules": {
      "no-underscore-dangle": ["error", { "allow": ["_id"] }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/forbid-prop-types": [true, { "forbid": ['any', 'array', 'object'], checkContextTypes: true, checkChildContextTypes: true }],
    },
};
