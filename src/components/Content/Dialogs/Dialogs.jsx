import React       from 'react';
import s           from './Dialogs.module.css';
import Messages    from './Messages/Messages';
import DialogItems from './DialogItems/DialogItems';

const Dialogs = (props) => {

  const textarea = React.createRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit();
  };
  const onTextareaChange = () => {
    const text = textarea.current.value;
    props.onTextareaChange(text);
  };

  return (
      <div className={s.dialogs}>
        <DialogItems dialogs={props.state.dialogs}/>
        <Messages messages={props.state.messages}/>
        <form action="" onSubmit={onFormSubmit}>
          <textarea ref={textarea} name="" onChange={onTextareaChange}
                    value={props.state.newMessageBody} id="" cols="30"
                    rows="10"/>
          <button>Добавить</button>
        </form>
      </div>
  );
};
export default Dialogs;