```typescript
export declare interface AppProps {
    children1: JSX.Element; // bad, doesnt account for arrays
    children2: JSX.Element | JSX.Element[]; // meh, doesn't accept strings
    children3: React.ReactChildren; // despite the name, not at all an appropriate type; it is a utility
    children4: React.ReactChild[]; // better
    children: React.ReactNode; // best, accepts everything
    functionChildren: (name: string) => React.ReactNode; // recommended function as a child render prop type
    style?: React.CSSProperties; // to pass through style props
    onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
    //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
    props: Props & React.ComponentPropsWithoutRef<'button'>; // to impersonate all the props of a button element and explicitly not forwarding its ref
    props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
}

type AppProps = {
    message: string;
    count: number;
    disabled: boolean;
    /** array of a type! */
    names: string[];
    /** string literals to specify exact string values, with a union type to join them together */
    status: 'waiting' | 'success';
    /** any object as long as you dont use its properties (NOT COMMON but useful as placeholder) */
    obj: object;
    obj2: {}; // almost the same as `object`, exactly the same as `Object`
    /** an object with any number of properties (PREFERRED) */
    obj3: {
        id: string;
        title: string;
    };
    /** array of objects! (common) */
    objArr: {
        id: string;
        title: string;
    }[];
    /** a dict object with any number of properties of the same type */
    dict1: {
        [key: string]: MyTypeHere;
    };
    dict2: Record<string, MyTypeHere>; // equivalent to dict1
    /** any function as long as you don't invoke it (not recommended) */
    onSomething: Function;
    /** function that doesn't take or return anything (VERY COMMON) */
    onClick: () => void;
    /** function with named prop (VERY COMMON) */
    onChange: (id: number) => void;
    /** alternative function type syntax that takes an event (VERY COMMON) */
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    /** an optional prop (VERY COMMON!) */
    optional?: OptionalType;
};
```
