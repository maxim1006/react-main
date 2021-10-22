interface FamilyMemberNameModel {
    lang: string;
    value: string;
}

// eslint-disable-next-line
function addFamilyMember(name: string | FamilyMemberNameModel) {
    // а с проверкой на typedef все норм
    if (isFamilyMemberNameModel(name)) {
        console.log(name.lang);
    }

    // так будет ошибка
    // console.log(name.lang);
}

export default function isFamilyMemberNameModel(name: string | FamilyMemberNameModel): name is FamilyMemberNameModel {
    return (name as FamilyMemberNameModel).lang !== undefined;
}

// Для того чтобы проверить на собственные созданные интерфейсы использую технику создания typedef функции
// и теперь могу что угодно проверять
// type ProductOfferingRowProps = {
//     model: RadioButtonModel | string;
//     translateKey: string;
// };
//
// function isRadioButtonModel(model: RadioButtonModel | string): model is RadioButtonModel {
//     return (model as RadioButtonModel).items !== undefined;
// }
//
// <div className={styles.productRowContent}>{isRadioButtonModel(model) && <RadioButton model={model} />}</div>
