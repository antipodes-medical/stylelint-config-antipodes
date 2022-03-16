# Installation

```bash
yarn add @antipodes-medical/stylelint-config-antipodes -D
```

# Usage

```json
{
  "extends": "stylelint-config-antipode"
}
```

# Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/at-if-no-null` rule:

```json
{
  "extends": "stylelint-config-recommended-scss",
  "rules": {
    "scss/at-if-no-null": null
  }
}
```