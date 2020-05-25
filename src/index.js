import './index.css';
import * as serviceWorker from './serviceWorker';
import {rendererEntireTree} from './render'
import state from './redux/state';

rendererEntireTree(state);

serviceWorker.unregister();


