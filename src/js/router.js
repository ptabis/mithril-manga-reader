import m from 'mithril';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Page from './components/Page';

m.route(document.querySelector('#app'), '/', {
    '/': Home,
    '/g/:gallery_id': Gallery,
    '/g/:gallery_id/page/:page_id': Page,
});