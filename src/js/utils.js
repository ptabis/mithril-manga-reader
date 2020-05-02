export const url = process.env.JSON_URL;

export let getData = (url, callback) => {
    fetch(url).then((res) => {
        return res.json();
    }).then((json) => {
        return callback(json);
    });
};