import m from 'mithril';

let Page = {
    view: function(vnode) {
        const url = process.env.JSON_URL;
        document.querySelector("#app").innerHTML = "";
        const g_id = vnode.attrs.gallery_id;
        const p_id = vnode.attrs.page_id;
        let next_page = parseInt(p_id) + 1;
        let previous_page = parseInt(p_id) - 1;
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            if(previous_page < 1) previous_page = parseInt(data[g_id-1].pages.length) - 1;
            if(next_page > data[g_id-1].pages.length-1) next_page = 1;
            document.querySelector("#app").innerHTML += 
                `<a href="/#!/g/${g_id}/page/${next_page}"><img src="${data[g_id-1].pages[p_id-1]}" width="50%" height="50%" /></a><br>` +
                `<span id="page_nav">` +
                `<a href="/#!/g/${g_id}/page/${previous_page}"><i style="font-size: 3em">&larr;</i></a>` +
                `<a href="/#!/g/${g_id}"><i style="font-size: 3em">&uarr;</i></a>` +
                `<a href="/#!/g/${g_id}/page/${next_page}"><i style="font-size: 3em">&rarr;</i></a>` +
                `</span>`;
        });
    }
}

export default Page;