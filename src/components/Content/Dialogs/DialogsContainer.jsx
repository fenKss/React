import {changeBodyMessageCreator, sendMessageCreator} from '../../../redux/dialgosReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return {
         state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) =>{

    const onTextareaChange = (message) => {
        const action = changeBodyMessageCreator(message);
        dispatch(action);
    }

    const onFormSubmit = () => {
        const action = sendMessageCreator();
        dispatch(action);
    }
    return {
        onTextareaChange:onTextareaChange,
        onFormSubmit:onFormSubmit,
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;