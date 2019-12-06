import React, {useContext} from 'react';
import LanguageContext from "../../context/LanguageContext";

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
//         return (
//             <button type="button">Submit</button>
//         );
//     }
// }
