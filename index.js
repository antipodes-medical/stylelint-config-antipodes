'use strict';

module.exports = {
  "extends": "stylelint-config-recommended-scss",
  "plugins": [
    "stylelint-order",
    "stylelint-selector-bem-pattern"
  ],
  "rules": {
    "max-empty-lines": 1,
    "selector-list-comma-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "color-no-invalid-hex": true,
    "font-family-no-duplicate-names": true,
    "named-grid-areas-no-invalid": true,
    "indentation": 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "selector-max-id": 0,
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-brackets-space-inside": "never",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always-single-line",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "number-leading-zero": "always",
    "function-url-quotes": "always",
    "function-url-no-scheme-relative": true,
    "font-weight-notation": "numeric",
    "font-family-name-quotes": "always-where-required",
    "comment-whitespace-inside": "always",
    "comment-empty-line-before": "always",
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": "never",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-no-vendor-prefix": true,
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-colon-space-before": "never",
    "media-feature-colon-space-after": "always",
    "comment-no-empty": true,
    "selector-combinator-space-before": "always",
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": [
          "first-nested"
        ]
      }
    ],
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-no-unknown": true,
    "unit-no-unknown": true,
    "custom-property-no-missing-var-function": true,
    "property-no-unknown": true,
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": true,
    "no-empty-source": true,
    "shorthand-property-no-redundant-values": true,
    "selector-max-compound-selectors": 4,
    "max-nesting-depth": 2,
    "value-keyword-case": "lower",
    "function-name-case": "lower",
    "selector-type-case": "lower",
    "comment-whitespace-inside": "always",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-max-empty-lines": 0,
    "function-parentheses-space-inside": "never",
    "function-whitespace-after": "always",
    "function-comma-space-before": "never-single-line",
    "function-comma-space-after": "always",
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "never",
    "declaration-colon-newline-after": "always-multi-line",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "plugin/selector-bem-pattern": {
      "componentName": "[A-Z]+",
      "componentSelectors": {
        "initial": "^\\.{componentName}(?:-[a-z]+)?$",
        "combined": "^\\.combined-{componentName}-[a-z]+$"
      },
      "utilitySelectors": "^\\.util-[a-z]+$"
    },
    "custom-property-pattern": "",
    "declaration-block-no-duplicate-properties": true,
    "order/order": [
      "dollar-variables",
      "custom-properties",
      "declarations",
      "rules",
      "at-rules"
    ],
    "order/properties-order": [
      "grid-area",
      "grid-column",
      "grid-row",
      "content",
      "display",
      "flex-direction",
      "flex-wrap",
      "flex-flow",
      "align-items",
      "align-content",
      "justify-content",
      "order",
      "align-self",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "grid-auto-columns",
      "grid-auto-rows",
      "grid-auto-flow",
      "grid-gap",
      "grid-column-gap",
      "grid-row-gap",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "position",
      "z-index",
      "top",
      "right",
      "bottom",
      "left",
      "float",
      "clear",
      "cursor",
      "opacity",
      "overflow",
      "clip",
      "font-family",
      "font-size",
      "color",
      "font-weight",
      "line-height",
      "letter-spacing",
      "text-align",
      "text-transform",
      "word-spacing",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "border",
      "border-radius",
      "box-sizing",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "background",
      "background-image",
      "background-size",
      "background-position",
      "background-repeat",
      "background-clip",
      "background-origin",
      "background-attachment",
      "background-color",
      "box-shadow",
      "outline",
      "user-select",
      "animation",
      "transition"
    ],
        "scss/selector-no-redundant-nesting-selector": true,
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-function-parentheses-space-before": "never",
    "scss/at-function-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "scss/at-mixin-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-parentheses-space-before": "never",
    "scss/at-mixin-named-arguments": "always",
    "scss/at-use-no-unnamespaced": true,
    "scss/dollar-variable-colon-newline-after": "always-multi-line",
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/dollar-variable-empty-line-after": [
      "always",
      {
        "except": [
          "last-nested",
          "before-dollar-variable"
        ],
        "ignore": [
          "inside-single-line-block"
        ]
      }
    ],
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested",
          "after-dollar-variable"
        ],
        "ignore": [
          "after-comment",
          "inside-single-line-block"
        ]
      }
    ],
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/double-slash-comment-empty-line-before": [
      "always",
      {
        "except": [
          "first-nested"
        ],
        "ignore": [
          "between-comments",
          "inside-block",
          "stylelint-commands"
        ]
      }
    ],
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/dimension-no-non-numeric-values": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
    "scss/no-duplicate-dollar-variables": [
      true,
      {
        "ignoreInside": [
          "at-rule",
          "nested-at-rule"
        ]
      }
    ],
    "scss/no-duplicate-mixins": true
  }
}
