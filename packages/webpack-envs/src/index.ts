import './index.scss';
import { IExport3 } from './examples/imports/export3';

console.log(process.env.ENV1);
console.log(process.env.ENV2);
console.log(window.route.ENV1);
console.log(window.route.ENV2);

window.document.addEventListener('click', async (): Promise<any> => {
    const { default: export1 } = await import('./examples/imports/export1');
    const { default: export2 } = await import('./examples/imports/export2');

    const export3: IExport3 = {
        name: 'export3',
    };

    console.log(export1, export2, export3);
});
