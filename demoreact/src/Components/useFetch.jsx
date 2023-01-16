import { useState, useEffect } from "react";


const useFetch = (url) => {
 
    const [apiData, setApiData] = useState("");

    const handleFetch = async () => {
        let data = await fetch(url);
        let result = await data.json();
        setApiData(result)
    }

    useEffect(() => {
        handleFetch();
    }, [])

    return [apiData];

}

export default useFetch