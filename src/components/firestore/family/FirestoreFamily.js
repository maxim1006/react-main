import React, {memo} from "react";
import useFirestoreFamily from "../../hooks/useFirestoreFamily";
import MaterialLoader from "../../loader/MaterialLoader";
import {StyledFirestoreFamilyList} from "./StyledFirestoreFamily";

export default memo(() => {
    const family = useFirestoreFamily();

    return (
        family ?
            <StyledFirestoreFamilyList>
                {family.map(({name, age}, index) => (<li key={index}>Name: {name} age: {age}</li>))}
            </StyledFirestoreFamilyList> :
            <MaterialLoader/>
    );
});


// ну или с использованием HOC
// const FirestoreFamily = memo(({family}) => (
//     <ul>
//         {family && family.map(({name, age}, index) => (<li key={index}>Name: {name} age: {age}</li>))}
//     </ul>
// ));
//
// const FirestoreFamilyWithLoader = WithMaterialLoader(FirestoreFamily);
//
// export default memo(() => {
//     const family = useFirestoreFamily();
//     return <FirestoreFamilyWithLoader family={family} isLoading={!family} />
// });
