import { makeDom } from './Dommake.js';

// Make Node Tree
const root = document.getElementById('root');
// console.log(root);

makeDom.AppendTag(root, makeDom.MakeTag('div', 2, 'div', null, null, null));
