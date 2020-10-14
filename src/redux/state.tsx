let rerenderEntireTree = () => {
  console.log('state changed')
}

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
  newPostText: string
  postsData: Array<PostsType>
};
export type DialogsPageType = {
  dialogsData: Array<DialogsType>;
};
export type MessagePageType = {
  messageData: Array<MessageType>;
};
export type postMessageType = {         // new post is here
    postMessage: newPostType 
};
export type newPostType = {            //type of new post
    id: number
    post: string
    likes: 0
}
type SidebarType = {};
  
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  messagePage: MessagePageType;
  sidebar: SidebarType;
};

let state = {
  profilePage: {
    newPostText: '',
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
    messageData: [
      { id: 1, message: "Hi, whatsapp?" },
      { id: 2, message: "Go to the cinema tonight?" },
      { id: 3, message: "By the way, did you go to your aunt?" },
    ],
  },
  sidebar: {},
};

export let addPost = () => {
    const newPost: newPostType = {
        id: 5,
        post: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.postsData.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree();
}
export const updateText = (newText: string) => {
  state.profilePage.newPostText = newText 
  rerenderEntireTree();
}
export const subscribe = (observer:() => void) => {
  rerenderEntireTree = observer;
}
export default state;
