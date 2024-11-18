import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (endpoint) => {

    const [data, setData] = useState([]);
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        setLoading(true);
        const getData= axios(endpoint)

        getData
        .then(res=> setData(res.data))
        .catch((error) => console.log(error))
        .finally(()=>{
            setLoading(false);
        });
    },[endpoint])

 return{data, loading};
}

