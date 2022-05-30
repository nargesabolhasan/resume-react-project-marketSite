import React, { useState ,useEffect} from 'react'
import HttpService from "../axios/HttpService"

const usePostAxios = (url ,changedData,needToken=false) => {
    const [error,setError] = useState()
    const [data,setData] = useState()
    const [loading,setLoding] = useState(false)
    useEffect(() => {
        (async()=> {
            try {
                setLoding(true);
                const response=await HttpService.post(url, changedData,
                    needToken&&
                    { headers: {"token" :localStorage.getItem("token")} }
                    );
                const result = await response.json()
                setData(result)
            }catch (error) {
                setError(error)
            }finally {
                setLoding(false)
            }
        })()

    },[url])
    return {data,loading,error}
}

export default usePostAxios