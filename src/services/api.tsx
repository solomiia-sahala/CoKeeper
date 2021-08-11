import firebase from '../initFirebase';
import { storage } from '../initFirebase';

const db = firebase.firestore();
const storageRef = storage.ref();

type ContactDataProps = {
    id?: string,
    nameSurname?: string,
    mobile?: number | null,
    email?: string,
    avatar?: any,
    position?: string,
    jobTitle?: string,
    linkFacebook?: string,
    linkLinkedin?: string,
    linkTwitter?: string,
    favorite?: boolean
}

const api = {
    createContact(contactData: ContactDataProps) {
        const userRef = db.collection('contacts').add(contactData).then((docRef) => {
            return docRef.id;
        })

        return userRef;
    },

    updateContact(id: string, updateData: ContactDataProps) {
        db.collection("contacts").doc(id).update(updateData)
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    },

    deleteContact(id: string) {
        db.collection("contacts").doc(id).delete().catch((error) => {
            console.error("Error removing contact: ", error);
        });
    },

    async getAllContacts() {
        const allContacts: Array<any> = [];
        await db.collection("contacts").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                allContacts.push(doc.data());
            });
        })
        return allContacts;
    },

    async getContactById(id: string) {
        let user;
        await db.collection("contacts").doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    user = doc.data();
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            })
        return user;
    },

    async getAllFavorites() {
        const allFavorites: Array<any> = [];
        await db.collection("contacts").where("favorite", "==", true)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    allFavorites.push(doc.data());
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
        return allFavorites;
    },

    async uploadAvatar(image: any):Promise<string> {
        const imageRef = storageRef.child(image.name);
        await imageRef.put(image);
        return await imageRef.getDownloadURL();
    },

    async deleteImageFromStorage(fullpath: string):Promise<void> {
        let splitedPath = fullpath.split('/');
        let imgName = splitedPath[splitedPath.length - 1].split('?')[0];
        let desertRef = storageRef.child(imgName);
        return await desertRef.delete();
    }
}

export default api;
