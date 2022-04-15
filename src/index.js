import Templator from './modules/templator';
import { template } from '../block.tmpl'

const tmpl = new Templator(template);

const context = {
  text: 'Мой очень важный span',
  className: 'chats',
  user: {
    info: {
      firstName: 'Alexander',
    },
  },
  handleClick: function () {
    console.log(document.body);
  }
};

const renderedTemplate = tmpl.compile(context);
console.log(renderedTemplate);
const root = document.querySelector('#root');
root.innerHTML = renderedTemplate;
