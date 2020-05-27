const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';

let initState = {
    newMessageBody: ``,
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: `Hi Dima`},
        {id: 2, message: `Hi, how are you?`},
        {id: 3, message: `Hi from fenK`},
        {id: 4, message: `Hi bitch`},
        {id: 5, message: `Hi yo`},
    ],

}
const dialogsReduser = (state = initState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case CHANGE_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageBody,
            }
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        default:
            return state;
    }
}

export default dialogsReduser;

export const changeBodyMessageCreator = (message) => ({
    type: CHANGE_MESSAGE_BODY,
    body: message,
});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
