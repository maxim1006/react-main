/* Если хочу иметь возможность кастомно переключать роуты из кода а не по кликам то
меняю BrowserRouter, который не поддерживает свойство history={history} (кастомный объект
 history, а умеет только свой) на Router*/
import { createBrowserHistory } from 'history';

export default createBrowserHistory();
