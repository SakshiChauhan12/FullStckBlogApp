import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const abortController = new AbortController();
     
    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
                .then((res) => {
                    console.log("fetch is successful");
                    // console.log(res);
                    if (res.ok) {
                        // fetch is success, and res is fetched
                        return res.json();
                    }
                    else {
                        // fetch is success but data is not fetched
                        throw Error("Data is not fetched from the API");
                    }
                })
                .then((data) => {
                    console.log("json parsing is successful");
                    setData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    // if (err.name === 'AbortError') {
                    //     console.log("Fetch is aborted");
                    // }
                    setLoading(false);
                    setError(err);
                    console.log("fetch is failed: catch block executed");
                })
        }, 2000);
        return () => {
            console.log("useFetch() cleanup function is called");   
            abortController.abort();
        }
    }, [url]);

    return { data, loading, error };
};

export default useFetch;