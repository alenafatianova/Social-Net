import {DialogsReducer, DialogsActionsType} from "./DialogsReducer";
import {ProfileReducer, ProfileActionsType} from "./ProfileReducer";
import {NavbarReducer} from "./NavbarReducer"

export let store: StoreType = {
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
      newMessageTextBody: "",
      messageData: [
        { id: 1, message: "Hi, whatsapp?" },
        { id: 2, message: "Go to the cinema tonight?" },
        { id: 3, message: "By the way, did you go to your aunt?" },
      ],
    },
    navbar: {},
    header: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action as ProfileActionsType)
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action as DialogsActionsType)
    this._state.navbar = NavbarReducer(this._state.navbar, action)
    this._callSubscriber();
  }
}
export type ActionsType =  ProfileActionsType | DialogsActionsType
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
  dialogsData: Array<DialogsType>
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
export type NavbarType = {};
export type HeaderType = {}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  navbar: NavbarType
  header: HeaderType
};

export default store;
