import { useEffect, useState } from 'react';

import { projectFirestore } from "../firebase/config";

export const useCollection = (collection) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ref = projectFirestore.collection(collection);
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let result = [];
            snapshot.docs.forEach(doc => {
                result.push({ ...doc.data(), id: doc.id });
            });
            setDocuments(result);
            setError(null);
        }, (err) => {
            console.log(err);
            setError("Couldn't Fetch The Data");
        });

        return () => unsubscribe();
    }, [collection]);

    return { documents, error };
};