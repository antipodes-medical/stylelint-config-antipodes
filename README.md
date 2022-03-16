# Installation

```bash
yarn add @antipodes-medical/stylelint-config-antipodes -D
```

# Usage

`.stylelintrc.json`
```json
{
  "extends": "@antipodes-medical/stylelint-config-antipodes"
}
```

# Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/at-if-no-null` rule:

```json
{
  "extends": "@antipodes-medical/stylelint-config-antipodes",
  "rules": {
    "scss/at-if-no-null": null
  }
}
```