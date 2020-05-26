const CHANGE_MESSAGE_BODY = 'CHANGE-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReduser = (state, action) => {
    const _changeMessageBody = (body) => {
            state.newMessageBody = body;
        },
        _sendMessage = () => {
            let newMessage = {
                id: 5,
                message: state.newMessageBody,
            }
            state.messages.push(newMessage);
            state.newMessageBody = '';
        };

    switch (action.type) {
        case CHANGE_MESSAGE_BODY:
            _changeMessageBody(action.body);
            return state;
        case SEND_MESSAGE:
            _sendMessage();
            return state;
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
