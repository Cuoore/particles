# Loading

## Declaration

```html
<cuoore-loading></cuoore-loading>
```

## Theme

Review global theme variables in [theme section](../../theme/theme.md)

You only need add that structure to your theme.

```css
cuoore-loading {
  --loading---width: 200px;
  --loading--small---width: 50px;
  --loading--big---width: 400px;
  --loading---height: 200px;
  --loading--small---height: 50px;
  --loading--big---height: 400px;
  --loading-primary---opacity: 0.8;
  --loading-secondary---opacity: 0.2;
  --loading-primary---color: var(--color-primary);
  --loading-secondary---color: var(--color-secondary);
}
```

## Attributes

### running

Manage if loading is running.

**Type** `<String>`

**Default** `false`

### speed

Manage the loading animation speed.

**Type** `<String>`

**Default** `0.8`

## Examples

### Default running true

```html
<cuoore-loading running="true"> </cuoore-loading>
```

### Custom Sizes

You need declare a class in loading component to select the different sizes

`small`
`big`

```html
<cuoore-loading class="small" running="true"> </cuoore-loading>
<cuoore-loading running="true"> </cuoore-loading>
<cuoore-loading class="big" running="true"> </cuoore-loading>
```

### Custom speed

```html
<cuoore-loading speed="0.7" running="true"> </cuoore-loading>
```
