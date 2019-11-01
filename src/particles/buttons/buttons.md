# Buttons



## Declaration



```html
<cuoore-button></cuoore-button>
```



## Theme



Review global theme variables in [theme section](../../themes/theme.md)

You only need add that structure to your theme.

Remember that some values are variables that has been taken from the root theme scope, but you can set the values that you want.



```css
  cuoore-button {
    --button---height: 75px;
    --button---border-radius: 12px;
    --button---border: 1px solid var(--color--secondary--OII);
    --button---color: var(--color--secondary--OIV);
    --button---background: var(--color--secondary--OII);
    --button---transition: background 1s, border 1s;
    --button--hover---color: var(--color--secondary);
    --button--hover---border: 1px solid var(--color--secondary--III);
    --button--hover---background: var(--color--secondary--III);
    --button--primary---color: var(--color--secondary);
    --button--primary---background: var(--color--primary);
    --button--primary---border: 1px solid var(--color--primary);
    --button--primary--hover---color: var(--color--secondary);
    --button--primary--hover---background: var(--color--primary--OOI);
    --button--primary--hover---border: 1px solid var(--color--primary--OOI);
    --button--outline---color: var(--color--primary);
    --button--outline---border: 1px solid var(--color--primary);
    --button--outline--hover---color: var(--color--primary--OOI);
    --button--outline--hover---border: 1px solid var(--color--primary--OOI);
  }

```



## Attributes



### type

Manage button type, `primary`, `outline` and so on.

**Type** `<String>`

**Default** `""`



### label

Set the text button.

**Type** `<String>`

**Default** `""`



## Examples



### Default 

```html
<cuoore-button label="default button"></cuoore-button>
```



### Primary 

```html
<cuoore-button type="primary" label="primary button"></cuoore-button>
```



### Outline

```html
<cuoore-button type="outline" label="outline button"></cuoore-button>
```

