module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest/globals": true,
      "cypress/globals": true
  },
  "extends": [ 
  ],
  "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
      "react", "jest", "cypress"
  ],
  "rules": {
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}