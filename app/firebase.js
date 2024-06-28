import { db } from './firebaseClient'; 
import { collection, addDoc } from 'firebase/firestore';

const addPost = async (formData) => 
    {
    try {
        const collectionRef = collection(db, 'post');
        
      
        await addDoc(collectionRef, {
            title: formData.id, 
        });

        console.log('Post successfully added!');
    } catch (error) {
        console.error('Error adding post: ', error);
    }
};

export { addPost };
