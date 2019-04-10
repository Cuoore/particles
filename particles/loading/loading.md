# Loading

## Declaration

```html
<cuoore-loading></cuoore-loading>
```

## Attributes

| Attribute        | Type   | Description            | Default |
| ---------------- | ------ | ---------------------- | ------- |
| running          | String | Play loading animation | true    |
| primaryColor     | String | Animation color        | #000000 |
| secondaryColor   | String | Back shadow color      | #000000 |
| width            | String | Width for loading      | 200px   |
| height           | String | Height for loading     | 200px   |
| primaryOpacity   | String | Animation opacity      | 1       |
| secondaryOpacity | String | Back shadow opacity    | 0.4     |
| speed            | String | Animation Speed        | 0.5     |

## Examples

### Custom colors

```html
<cuoore-loading primaryColor="#B21F2E" secondaryColor="#FFDBA9" secondaryOpacity="0.4" running="true"> </cuoore-loading>
```

### Custom opacity

```html
<cuoore-loading
  primaryColor="#B21F2E"
  secondaryColor="#FFDBA9"
  primaryOpacity="0.5"
  secondaryOpacity="0.1"
  running="true"
>
</cuoore-loading>
```
