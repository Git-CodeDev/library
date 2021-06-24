import React, {Component} from 'react';
import BookListItem from '../bookListItem';
import {connect} from 'react-redux'; 
import WithContext from '../hoc'; 
import {bookLoaded, bookRequested, bookError} from '../../actions';  
import Error from '../error';
import Spinner from '../spinner'
import BookEditor from '../bookEditor';
import UIkit from 'uikit';
import ModalInfo from '../modalInfo';

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    componentDidMount() {
        this.props.bookRequested(); 

        const {Service} = this.props;
        Service.getBookItems()
        .then(res => this.props.bookLoaded(res))
        .catch(error => this.props.bookError())
    }  

    onChange(e) {
        e.persist();
        this.setState({value: e.target.value})
    }

    render() {
        const {bookItems, loading, error} = this.props;
        const modal = true;
        
        if (error) return <Error/>
        if (loading) return <Spinner/>
        
        return (
            <>
                <input className="book__seach" type="text" placeholder="Поиск по названию" onChange={(e) => this.onChange(e)}></input>
                <BookEditor  modal={modal} target={"modal-open"}/>
                <ModalInfo modal={modal} target={"modal-info"}/>
                <button className="uk-button uk-button-primary uk-margin-small-right" uk-toggle="target: #modal-open">+</button> 
                <ul className="book__list">
                    {
                        bookItems.map(bookItem => {
                            if (bookItem.title.toLowerCase().search(this.state.value.toLowerCase()) != -1) {return <BookListItem key={bookItem.id} bookItem={bookItem} />}
                        })
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookItems: state.books,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    bookLoaded,
    bookRequested,
    bookError
}

export default WithContext()(connect(mapStateToProps, mapDispatchToProps)(BookList));
