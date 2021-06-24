import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addedToList, bookRequested} from '../../actions';

class BookEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInfo: {
                title: '',
                published: '',
                description: '',
                id: ''
            }
        }
    }

    applyBook() {
        this.state.bookInfo.id = Math.random().toString().substring(2);
        this.props.addedToList(this.state.bookInfo);
        this.clearInputs();
    }

    onValueChange(e) {
        if (e.target.getAttribute("data-title")) {
            e.persist();
            this.setState(({bookInfo}) => {
                const newBookInfo = {
                    ...bookInfo,
                    title: e.target.value
                }

                return {
                    bookInfo: newBookInfo
                }
            })


        } else if (e.target.getAttribute("data-published")) {
            e.persist(); 
            this.setState(({bookInfo}) => {
                const newBookInfo = {
                    ...bookInfo,  
                    published: e.target.value  
                }

                return {
                    bookInfo: newBookInfo
                }
            })

        } else {
            e.persist();  
            this.setState(({bookInfo}) => { 
                const newBookInfo = { 
                    ...bookInfo, 
                    description: e.target.value
                }

                return {
                    bookInfo: newBookInfo
                }
            })
        }
    }

    clearInputs() {
        this.setState({
            bookInfo: {
                title: '',
                published: '',
                description: '',
                id: ''
            }
        })
    }

    render() {
        const {modal, target} = this.props;
        const {title, published, description} = this.state.bookInfo;

        return(
            <div id={target} uk-modal={modal.toString()}>
                <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">Внесите данные о книге</h2>

                <form>
                <div className="uk-margin">
                        <input 
                        data-title
                        className="uk-input" 
                        type="text" 
                        placeholder="Title" 
                        value={title}
                        onChange={(e) => this.onValueChange(e)}/>
                   </div>

                   <div className="uk-margin">
                        <input 
                        data-published
                        className="uk-input" 
                        type="text" 
                        placeholder="Published" 
                        value={published}
                        onChange={(e) => this.onValueChange(e)}/>
                   </div>

                   <div className="uk-margin">
                        <textarea 
                        data-description
                        className="uk-textarea" 
                        rows="5" placeholder="Description" 
                        value={description}
                        onChange={(e) => this.onValueChange(e)}></textarea>
                    </div>

                    <p className="uk-text-right">
                        <button className="uk-button uk-button-default uk-modal-close uk-margin-small-right " type="button">Отменить</button>
                        <button
                            className="uk-button uk-button-primary uk-modal-close" 
                            type="button"
                            onClick={() => this.applyBook()}>Применить</button>
                </p>
                </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        bookItems: state.books
    }
}

const mapDispatchToProps = { 
    addedToList,
    bookRequested
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEditor);
