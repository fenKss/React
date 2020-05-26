import React from 'react';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import DialogItems from './DialogItems/DialogItems';
import {changeBodyMessageCreator, sendMessageCreator} from '../../redux/state';



const Dialogs = (props) => {
    const textarea = React.createRef();

    const onTextareaChange = () =>{
        let message = textarea.current.value,
            action = changeBodyMessageCreator(message);
        props.dispatch(action);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const action = sendMessageCreator();
        props.dispatch(action);
        console.log(123);
    }

    return (
        <div className={s.dialogs}>
            <DialogItems dialogs={props.state.dialogs}/>
            <Messages messages={props.state.messages}/>
            <form action="" onSubmit={onFormSubmit}>
                <textarea ref={textarea} name="" onChange={onTextareaChange} value={props.state.newMessageBody} id="" cols="30" rows="10"/>
                <button>Добавить</button>
            </form>
        </div>
    )
}
export default Dialogs;