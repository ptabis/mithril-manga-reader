import m from 'mithril';

let Home = {
    view: function(vnode) {
        document.querySelector("#app").innerHTML = "";
        const url = process.env.JSON_URL;

        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            for(let i = data.length-1; i>=0 && i > data.length-21; i--) {
                document.querySelector("#app").innerHTML += `<a href="/#!/g/${i+1}"><img src="${data[i].pages[0]}" width="250" height="358" /></a>`;
            }
        });
    }
}

export default Home;