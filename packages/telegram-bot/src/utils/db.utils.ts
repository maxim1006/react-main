import { DB } from '../db/db';
import { DocumentData } from '@google-cloud/firestore';
import { firestore } from 'firebase-admin';
import DocumentReference = firestore.DocumentReference;

export const setDBDoc = async <T = { [x: string]: any }>(
    doc: DocumentReference<DocumentData>,
    data: T
) => {
    return doc.set(data as any, { merge: true });
};

export const getDataByDocName = async <T>(docName: string): Promise<T> => {
    const docRef = await DB.doc(docName);
    const docSnapshot = await docRef.get();
    return docSnapshot.data() as T;
};
