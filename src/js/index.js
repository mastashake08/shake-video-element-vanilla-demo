import '../css/global.css';
import '../scss/global.scss';
import { registerElement } from '@mastashake08/shake-video-element';
registerElement();
const shake = document.getElementById('shake-video');
console.log(shake.getVideo())