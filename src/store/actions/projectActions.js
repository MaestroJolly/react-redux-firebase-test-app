export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to the database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'John',
            authorLastName: 'Doe',
            authorId: 123456,
            createdAt: new Date()
        }).then((response) =>{
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((error) =>{
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        });
    }
}