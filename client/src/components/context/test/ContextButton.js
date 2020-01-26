import React, {useContext} from 'react';
import LanguageContext from "../../../context/LanguageContext";

export default () => {
    const language = useContext(LanguageContext);
    const text = language === "en" ? "Submit" : "Подтвердить";

    return (
        <button type="button">{text}</button>
    );
}


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

