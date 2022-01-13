// tsc -p ./ - из командой строки данной командой могу указат откуда брать tsconfig
// tsc -p ./ -w - помимо вышеизложенной команды еще и вотчер запускает
import "./index.scss";

window.document.addEventListener(
    'click',
    async (): Promise<any> => {
        const { default: export1 } = await import('./examples/imports/export1');
        const { default: export2 } = await import('./examples/imports/export2');

        console.log(export1, export2);
    }
);
