import m from 'mithril';
import { getData, url } from '../utils';

let Home = {
    view: function(vnode) {
        document.querySelector("#app").innerHTML = "";
        getData(url, function(data) {
            for(let i = data.length-1; i>=0 && i > data.length-21; i--) {
                document.querySelector("#app").innerHTML += `<a href="/#!/g/${i+1}"><img src="${data[i].pages[0]}" width="250" height="358" /></a>`;
            }
        });
    }
}

export default Home;