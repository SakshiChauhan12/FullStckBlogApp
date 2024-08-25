// 1. Create a abortController
// 2. Create a signal from abortController
// 3. Pass the signal to fetch
// 4. Call abortController.abort() to abort the fetch request
// 5. Handle the AbortError in catch block

console.log("Start");
const url = "http://localhost:3099/blogs";

const abortController = new AbortController();
const signal = abortController.signal;

const fetchData = () => {
    setTimeout(() => {
        fetch(url, { signal })
            .then((res) => {
                console.log("fetch is successful");
                return res.json();
            })
            .then((data) => {
                console.log("json parsing is successful");
                console.log(data);
            })
            .catch((err) => {
                console.log("fetch is failed: catch block executed");
                console.log(err.message);
            })
    }, 1000);
}
fetchData();
abortController.abort();
console.log("End");





















































/*

console.log("Start");
const abortController = new AbortController();
const signal = abortController.signal;
const url = "http://localhost:3099/blogs";

const fetchData = () => {
    setTimeout(() => {
        fetch(url, { signal })
            .then((res) => {
                console.log("fetch is successful");
                return res.json();
            })
            .then((data) => {
                console.log("json parsing is successful");
                console.log(data);
            })
            .catch((err) => {
                console.log("fetch is failed: catch block executed");
                if (err.name === "AbortError") {
                    console.log("fetch is aborted");
                }
                else {
                    console.log(err);
                }
            })
    }, 1000);
}
fetchData();
abortController.abort();
console.log("fetch is aborted using abortController");


*/