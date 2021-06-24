const bookLoaded = (newBook) => {
    return {
        type: "BOOK_LOADED",
        payload: newBook
    };
}

const bookRequested = () => {
    return {
        type: "BOOK_REQUESTED"
    };
};

const bookError = () => {
    return {
        type: 'BOOK_ERROR'
    }
}

const addedToList = (state) => {
    return {
        type: "ADDED_TO_LIST",
        payload: state
    };
};

const deleteFromList = (id) => {
    return {
        type: "DELETE_FROM_LIST",
        payload: id
    }
};

const showInfo = (info) => {
    return {
        type: "SHOW_INFO",
        payload: info
    }
}


export {
    bookLoaded,
    bookRequested,
    bookError,
    addedToList,
    deleteFromList,
    showInfo
};