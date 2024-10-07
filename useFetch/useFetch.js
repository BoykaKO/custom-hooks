import { useEffect, useState } from "react"

//Incorporacion del cache
const localCache={}
export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()
    }, [url])
    const setIsLoading=()=>{
        setState({
            data:null,
            isLoading:true,
            hasError:false,
            error:null
        })
    }
    const getFetch = async () => {
        
        if (localCache[url]){
            setState({
                data:localCache[url],
                isLoading:false,
                hasError:false,
                error:null,
            })
            return;
        }
        setIsLoading()
        await new Promise(response=>setTimeout(response,2000))
        try {
            const resp = await fetch(url)
            if (!resp.ok) {
                setState({ 
                    data:null,
                    isLoading:false,
                    hasError:true,
                    error:{
                        statusCode:resp.status,
                        statusText:resp.statusText
                    }
                })
                throw new Error("error en la api")
            }
            const data = await resp.json()

            localCache[url]=data

            setState({
                data:data,
                isLoading:false,
                hasError:false,
                error:null
            })

        } catch (error) {
            console.error(error)
        }
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError

    }
}
