### context with function

Последовательность такая:
сперва создаю `OutsideChangeContext`

```js
import React from 'react';

export default React.createContext({ value: {}, setValue: () => {} });
```

далее в любом компоненте, например `OutsideChangeContextWrapper ` оборачиваю чайлдов в провайдер и задаю коллбек на изменение стейта. Далее любая компонента чайлд воспользуется контекстом и если захочет вызовет setValue, как только эта чайлдовая компонента вызовет setValue вызовется setValue коллбек в OutsideChangeContextWrapper и тригернет изменение стейта и перерисовку всех чайлдов OutsideChangeContextWrapper

```js
const [contextValue, setContextValue] = useState(null);

const setValue = event => {
    setContextValue(event.target.value);
};

<OutsideChangeContext.Provider value={{ value: contextValue, setValue }}>
    <OutsideChangeContextInner />
</OutsideChangeContext.Provider>;
```

меняю value в `OutsideChangeContextInner`
