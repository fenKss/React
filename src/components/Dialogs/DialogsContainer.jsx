import React from 'react';
import {changeBodyMessageCreator, sendMessageCreator} from '../../redux/dialgosReduser';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState();

            const onTextareaChange = (message) => {
                const action = changeBodyMessageCreator(message);
                store.dispatch(action);
            }

            const onFormSubmit = () => {
                const action = sendMessageCreator();
                store.dispatch(action);
            }
            return <Dialogs onTextareaChange={onTextareaChange} onFormSubmit={onFormSubmit} state={state.dialogsPage}/>
        }

        }

        </StoreContext.Consumer>
    )
}
export default DialogsContainer;