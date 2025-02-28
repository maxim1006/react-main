// source: https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement

A **ReactElement** is an object with type, props, and key properties:

```typescript
interface ReactElement<
  P = any,
  T extends
    | string
    | JSXElementConstructor<any> = string
    | JSXElementConstructor<any>,
> {
  type: T;
  props: P;
  key: string | null;
}
```

A **JSX.Element** is a ReactElement<any, any>. It exists as various libraries can implement JSX in their own way:
```typescript
declare global {
  // …
  namespace JSX {
    // …
    interface Element extends React.ReactElement<any, any> {}
    // …
  }
  // …
}

// в global.ts
namespace JSX {
    interface IntrinsicElements {
        'custom-selector': DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
}
```

A **ReactPortal** is a ReactElement with a children property:

```typescript
interface ReactPortal extends ReactElement {
  children: ReactNode;
}
```

A **ReactNode** is a ReactElement, string, number, Iterable<ReactNode>, ReactPortal, boolean, null, or undefined:

```typescript
type ReactNode =
  | ReactElement
  | string
  | number
  | Iterable<ReactNode>
  | ReactPortal
  | boolean
  | null
  | undefined;
```

Examples

```html
<div> // <- ReactElement / JSX.IntrinsicElement
    <Component> // <- ReactElement / FC 
        {condition && 'text'} // <- ReactNode
    </Component>
</div>
```

```typescript
type FC<P = {}> = FunctionComponent<P>;

interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}
```
