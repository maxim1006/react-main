import { memo, useContext } from 'react';
import LanguageContext from '@app/context/LanguageContext';

type ContextButtonProps = {};

const ContextButton = memo<ContextButtonProps>(function ContextButton() {
    const language = useContext(LanguageContext);
    const text = language === 'en' ? 'Submit' : 'Подтвердить';

    return <button type='button'>{text}</button>;
});

export default ContextButton;
// раньше надо было делать через класс или consumer но с 16.8 можно использовать useContext
// export default class ContextButton extends Component {
//     static contextType = LanguageContext;
//
//     render() {
//         console.log(this.context);
//
//         const text = this.context === "en" ? "Submit" : "Подтвердить";
//
//         return (
//             <button type="button">{text}</button>
//         );
//     }
// }

// вариант как делалось раньше через LanguageContext.Consumer
// export default () => {
//     return (
//         <button type="button">
//             <LanguageContext.Consumer>
//                 {(value) => value === "en" ? "Submit" : "Подтвердить"}
//             </LanguageContext.Consumer>
//
//         </button>
//     );
// }
