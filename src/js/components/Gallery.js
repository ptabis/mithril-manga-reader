let Gallery = {
    view: function(vnode) {
        const url = process.env.JSON_URL;
        document.querySelector("#app").innerHTML = "";
        if(vnode.attrs.gallery_id === "all") {
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
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
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            for(let i = 0; i < data[g_id].pages.length; i++) {
                if(i%6 == 0) document.querySelector("#app").innerHTML += "<br>";
                document.querySelector("#app").innerHTML += `<a href="/#!/g/${g_id+1}/page/${i+1}" style="margin: 5px; margin-top:5px;"><img src="${data[g_id].pages[i]}" width="250" height="358" /></a>`
            }
        });       
    }
}

export default Gallery;