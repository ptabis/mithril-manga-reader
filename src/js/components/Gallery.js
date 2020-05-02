import m from 'mithril';
import { getData, url } from '../utils';

let Gallery = {
    view: function(vnode) {
        document.querySelector("#app").innerHTML = "";
        if(vnode.attrs.gallery_id === "all") {
            getData(url, function(data) {
                document.querySelector("#app").innerHTML += "All mangas:<br>";
                for(let i = 0; i < data.length; i++) {
                    document.querySelector("#app").innerHTML += 
                        "<ul>" +
                        `<li><a href="/#!/g/${data[i].id}">${data[i].series_name}<a></li>` +
                        "</ul>";
                }
            });
        }
        let g_id = parseInt(vnode.attrs.gallery_id) - 1;
        getData(url, function(data) {
            for(let i = 0; i < data[g_id].pages.length; i++) {
                if(i%6 == 0) document.querySelector("#app").innerHTML += "<br>";
                document.querySelector("#app").innerHTML += `<a href="/#!/g/${g_id+1}/page/${i+1}" style="margin: 5px; margin-top:5px;"><img src="${data[g_id].pages[i]}" width="250" height="358" /></a>`
            }
        });      
    }
}

export default Gallery;