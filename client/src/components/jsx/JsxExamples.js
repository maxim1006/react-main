import './JsxExamples.css';

export default function JsxExamples() {
    const buttonText = 'Click me';
    const inlineStyles = { backgroundColor: '#e8f3e8', color: '#333' };

    return (
        <div>
            <h3>Differences from html</h3>
            <ol>
                <li className='jsx-example__list-item'>
                    {/* двойные стили пишу camelCase*/}
                    <div style={{ backgroundColor: '#e8f3e8', color: '#333' }}>Inline styles</div>
                    <div style={inlineStyles}>Inline styles2</div>
                </li>
                <li className='jsx-example__list-item'>
                    {/* className вместо class, htmlFor instead of for*/}
                    <div className='_modifier'>className instead of class</div>
                    {/* так тоже работает но выдает ошибку с ворнингом*/}
                    {/* <div class={"_modifier"}>class inside JSX also works</div>*/}
                    <label htmlFor='name'>htmlFor instead of for</label>
                    <input type='text' id='name' />
                </li>
                <li className='jsx-example__list-item'>
                    Variables in JSX
                    <button type='button'>{buttonText}</button>
                </li>
            </ol>
        </div>
    );
}
