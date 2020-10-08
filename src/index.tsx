import * as ServiceWorker from './serviceWorker'
import './index.css';
import state from './redux/state'
import {rerenderEntireTree} from './render'


rerenderEntireTree(state);


ServiceWorker.unregister();
