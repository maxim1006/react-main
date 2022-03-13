if (typeof window !== 'undefined') {
    window.document.addEventListener('click', async (): Promise<any> => {
        const { default: export1 } = await import('./examples/imports/export1.js');
        const { default: export2 } = await import('./examples/imports/export2.js');

        console.log(export1, export2);
    });
}
