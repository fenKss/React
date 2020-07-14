import Message from './Message/Message';
import React   from 'react';
import s       from '../Dialogs.module.css';

const Messages = (props) => {
  let messagesElements = props.messages.map((e,i) => <Message key={i} message={e.message}/>);

  return (
      <div className={s.messages}>
        {messagesElements}
      </div>
  );
};
export default Messages;

