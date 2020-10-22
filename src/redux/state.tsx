let store: StoreType = {
  _state: {
    profilePage: {
      newPostText: "",
      postsData: [
        { id: 1, post: "Heeeelloooo, guys!", likes: 33 },
        { id: 2, post: "Let's go and eat some pizza!!!", likes: 65 },
        { id: 3, post: "Found 10 dollars today...anyone lost it?", likes: 12 },
      ],
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Chandler" },
        { id: 2, name: "Monika" },
        { id: 3, name: "Rachel" },
        { id: 4, name: "Ross" },
        { id: 5, name: "Joey" },
        { id: 6, name: "Jennisse" },
        { id: 7, name: "Phoebe" },
      ],
    },
    messagePage: {
      newMessageTextBody: "",
      messageData: [
        { id: 1, message: "Hi, whatsapp?" },
        { id: 2, message: "Go to the cinema tonight?" },
        { id: 3, message: "By the way, did you go to your aunt?" },
      ],
      
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD_POST') {
      const newPost: newPostType = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postsData.unshift(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === 'UPDATE_TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber();
    } else if (action.type === 'MESSAGE_REPLY') {
      this._state.messagePage.newMessageTextBody = action.messageBody;
      this._callSubscriber();
    } else if (action.type === 'SEND_MESSAGE') {
      let messageBody = this._state.messagePage.newMessageTextBody;
      this._state.messagePage.messageData.push({id: 6, message: messageBody})
      this._state.messagePage.newMessageTextBody = '';
      this._callSubscriber();
    }
  },
};
const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const MESSAGE_REPLY = 'MESSAGE_REPLY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type ActionsType = ReturnType <typeof addPostActionCreator> |  
                          ReturnType <typeof changeNewPostCreator> |
                          ReturnType <typeof messageBodyCreator> |
                          ReturnType <typeof sendMessageCreator>

export const addPostActionCreator = () => ({type: 'ADD_POST'}) as const;
export const changeNewPostCreator = (newText: string)  => ({type: 'UPDATE_TEXT', newText: newText}) as const
export const messageBodyCreator = (messageBody: string) => ({type: 'MESSAGE_REPLY', messageBody: messageBody}) as const
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'}) as const

export type StoreType = {
  _state: RootStateType
  _callSubscriber: () => void
  getState: () => RootStateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsType) => void
};

export type PostsType = {
  id: number;
  post: string;
  likes: number;
};

export type DialogsType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  message: string;
  
};
export type ProfilePageType = {
  newPostText: string;
  postsData: Array<PostsType>;
};
export type DialogsPageType = {
  dialogsData: Array<DialogsType>;
};
export type MessagePageType = {
  messageData: Array<MessageType>
  newMessageTextBody: string
};
export type postMessageType = {
  // new post is here
  postMessage: newPostType;
};
export type newPostType = {
  //type of new post
  id: number;
  post: string;
  likes: 0;
};
type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  messagePage: MessagePageType;
  sidebar: SidebarType;
};

export default store;
