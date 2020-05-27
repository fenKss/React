import React from 'react';
import {changeBodyMessageCreator, sendMessageCreator} from '../../redux/dialgosReduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState();

    const onTextareaChange = (message) => {
        const action = changeBodyMessageCreator(message);
        props.store.dispatch(action);
    }

    const onFormSubmit = () => {
        const action = sendMessageCreator();
        props.store.dispatch(action);
    }

    return (
        <Dialogs onTextareaChange={onTextareaChange} onFormSubmit={onFormSubmit} state={state.dialogsPage}/>
    )
}
export default DialogsContainer;