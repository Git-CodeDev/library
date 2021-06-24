import React, {Component} from 'react';
import {connect} from 'react-redux';
import {applyChange} from '../../actions'

class ModalInfo extends Component {

    render() {
        const {modal, target} = this.props;
        const {description} = this.props.infoBook;
        
        return(
            <div id={target} uk-modal={modal.toString()}>
                <div className="uk-modal-dialog uk-modal-body">
                <h2 className="uk-modal-title">Описание</h2>

                <form>
                   <div className="uk-margin">
                        <div
                        data-description
                        className="uk-textarea" 
                        rows="5" placeholder="Description">{description}</div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({infoBook}) => {
    return {
        infoBook
    }
}

const mapDispatchToProps = {
    applyChange
}

export default connect(mapStateToProps)(ModalInfo);