import { Button } from './button/Button';
import { Header } from './header/Header';

// export Foo and Bar as named exports
export { Button, Header };

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// you can optionally also set a default export for your module
export default { Button, Header };
