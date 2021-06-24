import React from 'react';
import { connect } from 'react-redux';
import {deleteFromList, showInfo} from '../../actions';


const BookListItem = ({bookItem, deleteFromList, showInfo}) => {
    console.log(bookItem)
    const {title, published, id, description} = bookItem;

    return (
        <li>
            <div className="book__title">{title}</div>
            <div className="book__published">{published}</div>
            <button className="book__info" uk-toggle="target: #modal-info" 
            onClick={() => showInfo({id, description})}>i</button> 
            <button className="book__delete"
            onClick={() => deleteFromList(id)}
            >x</button>
        </li>
    )
}

const mapStateToProps = ({}) => {
    return {
        
    }
}

const mapDispatchToProps = {
    deleteFromList,
    showInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);