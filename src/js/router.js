import m from 'mithril';
import Home from './components/Home';

m.route(document.querySelector('#app'), '/', {
    '/': Home
});