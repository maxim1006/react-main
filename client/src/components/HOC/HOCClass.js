import { PureComponent } from 'react';
import WithMaterialLoader from './WithMaterialLoader';
import FamilyList from '../family/FamilyList';
import { firestore } from '@app/firebase/firebase.utils';

// WithMaterialLoader  это HOC
const FamilyWithLoader = WithMaterialLoader(FamilyList);

export default class FamilyWithLoaderContainer extends PureComponent {
    state = {
        family: null,
    };

    componentDidMount() {
        (async () => {
            try {
                const collectionRef = firestore.collection('family');
                const collectionSnapshot = await collectionRef.get();

                this.setState({
                    family: collectionSnapshot.docs.map(doc => doc.data()),
                });
            } catch (e) {
                console.log(`useFirestoreGetDocs getData ${'family'} error `, e);
            }
        })();
    }

    render() {
        const { family } = this.state;
        return <FamilyWithLoader family={family} isLoading={!family} />;
    }
}
