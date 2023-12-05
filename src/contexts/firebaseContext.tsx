import * as React from "react";
import firebase from "firebase/app";
import database from "firebase/database";

type FirebaseDatabaseContextProps = {
    listKeyWords: string[];
    setListKeyWords: React.Dispatch<React.SetStateAction<string[]>>;
    listPosts: any[];
    setListPosts: React.Dispatch<React.SetStateAction<any[]>>;
    listCategories: any[];
    setListCategories: React.Dispatch<React.SetStateAction<any[]>>;
    listTags: any[];
    setListTags: React.Dispatch<React.SetStateAction<any[]>>;
}

interface FirebaseContextProps {
    children?: React.ReactNode;
}



const FirebaseDatabaseContext =
    React.createContext<FirebaseDatabaseContextProps>({
        listKeyWords: [],
        setListKeyWords: () => {},
        listPosts: [],
        setListPosts: () => {},
        listCategories: [],
        setListCategories: () => {},
        listTags: [],
        setListTags: () => {},
    });

const FirebaseProvider: React.FC = ({ children }: FirebaseContextProps) => {

    const [listKeyWords, setListKeyWords] = React.useState<string[]>([]);
    const [listPosts, setListPosts] = React.useState<any[]>([]);
    const [listCategories, setListCategories] = React.useState<any[]>([]);
    const [listTags, setListTags] = React.useState<any[]>([]);
    const value = {
        listKeyWords,
        setListKeyWords,
        listPosts,
        setListPosts,
        listCategories,
        setListCategories,
        listTags,
        setListTags,
    };

    React.useEffect(() => {
        const db = database();
        const ref = db.ref("/");
        ref.on("value", (snapshot: any) => {
            const data = snapshot.val();
            const listKeyWords = data?.listKeyWords || [];
            const listPosts = data?.listPosts || [];
            const listCategories = data?.listCategories || [];
            const listTags = data?.listTags || [];
            setListKeyWords(listKeyWords);
            setListPosts(listPosts);
            setListCategories(listCategories);
            setListTags(listTags);
        });
    }, []);

    return (
        <FirebaseDatabaseContext.Provider value={value}>
            {children}
        </FirebaseDatabaseContext.Provider>
    );
};

export { FirebaseDatabaseContext, FirebaseProvider };