# Inputs

## Theme

Review global theme variables in [theme section](../../themes/theme.md)

You need set up this variables into your root custom properties scope.

```css
:root {
  --input---width: 100%;
  --input---height: 30px;
  --input---border-weight: 1px;
  --input---border: var(--input---border-weight) solid var(--color--primary);
  --input---border-radius: none;
  --input---padding: 5px 10px;
  --input---color: var(--color--primary);
  --input---background: transparent;
  --input---font-family: var(--font-family--primary);
  --input---font-size: 16px;
  --input--placeholder---font-style: italic;
  --input--placeholder---color: var(--color--secondary--III);
  --input--focus---width: calc(
    calc(var(--input---width) + calc(var(--input---border-weight) * 2)) - calc(var(--input--focus---border-weight) * 2)
  );
  --input--focus---height: calc(
    calc(var(--input---height) + calc(var(--input---border-weight) * 2)) - calc(var(--input--focus---border-weight) * 2)
  );
  --input--focus---border-weight: 4px;
  --input--focus---border: var(--input--focus---border-weight) solid var(--color--primary);
}
```

## Input type text

### Declaration

```html
<cuoore-input-text></cuoore-input-text>
```

### Theme

You only need add that structure to your theme.

```css
cuoore-input-text {
  --input-text---width: var(--input---width);
  --input-text---height: var(--input---height);
  --input-text---border: var(--input---border);
  --input-text---border-radius: var(--input---border-radius);
  --input-text---padding: var(--input---padding);
  --input-text---color: var(--input---color);
  --input-text---background: var(--input---background);
  --input-text---font-family: var(--input---font-family);
  --input-text---font-size: var(--input---font-size);
  --input-text--placeholder---color: var(--input--placeholder---color);
  --input-text--placeholder---font-style: var(--input--placeholder---font-style);
  --input-text--focus---border: var(--input--focus---border);
  --input-text--focus---width: var(--input--focus---width);
  --input-text--focus---height: var(--input--focus---height);
}
```

## Attributes

### placeholder

Manage the placeholder when the input is empty.

**Type** `<String>`

**Default** `""`

## Examples

### Default with placeholder

```html
<cuoore-input-text placeholder="Write here some text"></cuoore-input-text>
```
