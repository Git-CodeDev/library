const initialState = {
    books: [],
    loading: true,
    error: true,
    infoBook: {id: "", oldDescription: ""}
}

const reducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case "BOOK_LOADED":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false
            };
        case "BOOK_REQUESTED":
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'BOOK_ERROR':
            return {
                ...state,
                loading: true,
                error: true
            };
        case 'ADDED_TO_LIST':
            const {title, published ,description, id} = action.payload;
            const newBook = {
                title,
                published,
                description,
                id
            };

            return {
                ...state,
                books: [
                    ...state.books,
                    newBook
                ]
            };
        case 'DELETE_FROM_LIST':
            const idx = action.payload;
            const bookIndex = state.books.findIndex(book => book.id === idx);
            return {
                ...state,
                books: [
                    ...state.books.slice(0, bookIndex),
                    ...state.books.slice(bookIndex + 1)
                ]
            };
        case "SHOW_INFO":
            return {
                ...state,
                infoBook: {
                    id: action.payload.id,
                    description: action.payload.description
                    }
            }

        default:
            return state;
    }
}

export default reducer;