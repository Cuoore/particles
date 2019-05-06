# Theme



We can theme our cuoore conponents with a simples steps:



1.  A :`:root {}` scope with custom global properties.
2.  A `cuoore-my-component {}` scope with custom component properties to each component.



## Naming custom properties convention



We are using a simple convention to name our custom properties variables.

```css
--element--modifier---property: value;
```



## Global custom properties



This is the interface to set the global custom properties for a cuoore theme:



In root scope we have some subscopes defined:



*   color
*   font
*   input



```css
  :root {
    --color--primary: #b21f2e;
    --color--primary--OOI: #9c1522;
    --color--primary--OII: #7c0e19;
    --color--secondary: #ffdba9;
    --color--secondary--OOI: #fccd8b;
    --color--secondary--OII: #ecbe7e;
    --color--secondary--III: #deb377;
    --color--secondary--OIV: #9e773f;
    --color--black: #000000;
    --font-family--primary: 'Nunito', sans-serif;
    --font-size--OOI: 8px;
    --font-size--OII: 12px;
    --font-size--III: 14px;
    --font-size--OVI: 16px;
    --font-size--OOV: 18px;
    --font-size--OIV: 20px;
    --font-size: var(--font-size--OVI);
    --input---width: 100%;
    --input---height: 30px;
    --input---border-weight: 1px;
    --input---border: var(--input---border-weight) solid var(--color--primary);
    --input---border-radius: none;
    --input---padding: 5px 10px;
    --input---color: var(--color--primary);
    --input---background: transparent;
    --input---font-family: var(--font-family--primary);
    --input---font-size: var(--font-size);
    --input--placeholder---font-style: italic;
    --input--placeholder---color: var(--color--secondary--III);
    --input--focus---width: calc(
      calc(var(--input---width) + calc(var(--input---border-weight) * 2)) -
        calc(var(--input--focus---border-weight) * 2)
    );
    --input--focus---height: calc(
      calc(var(--input---height) + calc(var(--input---border-weight) * 2)) -
        calc(var(--input--focus---border-weight) * 2)
    );
    --input--focus---border-weight: 4px;
    --input--focus---border: var(--input--focus---border-weight) solid var(--color--primary);
  }
```



## Examples	



### Caramel

The custom theme for cuoore

[Caramel theme css file](./caramel/theme.css)