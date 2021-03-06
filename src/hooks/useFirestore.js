import { useReducer, useEffect, useState } from 'react';

import { projectFirestore } from "../firebase/config";
import { timestamp } from '../firebase/config';

import { useNavigate } from 'react-router-dom';

const initialState = {
    document: null,
    success: null,
    error: null,
}

const firestoreReducer = (state, action) => {
    switch (action.type) {
        case "ADDED_DOCUMENT":
            return { document: action.payload, success: true, error: null };
        case "DELETED_DOCUMENT":
            return { document: action.payload, success: true, error: null }; 
        case "ERROR":
            return { document: action.payload, success: false, error: action.payload };
        default:
            return state;
    }
}

export const useFirestore = (collection) => {

    const navigate = useNavigate();

    const [state, dispatch] = useReducer(firestoreReducer, initialState);

    const [isCancelled, setIsCancelled] = useState(false);

    // ref
    const ref = projectFirestore.collection(collection);

    // if dispatch not cancelled
    const dispatchIfNotCancelled = (action) => {
        if (!isCancelled) {
            dispatch(action);
        }
    }

    // add a document
    const addDocument = async (doc) => {
        try {
            const createdAt = timestamp.fromDate(new Date());
            const addedDocument = await ref.add({ ...doc, createdAt });
            dispatchIfNotCancelled({ type: "ADDED_DOCUMENT", payload: addDocument });

        }
        catch (err) {
            dispatchIfNotCancelled({type: "ERROR", payload: err});
            console.log(err)
        }
    }

    // delete a document
    const deleteDocument = async (id) => {
        try {
            const deletedDocument = await ref.doc(id).delete();
            dispatchIfNotCancelled({ type: "DELETED_DOCUMENT", payload: deletedDocument });
        }
        catch (err) {
            console.log(err)
            dispatchIfNotCancelled({ type: "ERROR", payload: "Couldn't Delete" });
        }
    }

    // clean up function
    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { addDocument, state, deleteDocument };
};