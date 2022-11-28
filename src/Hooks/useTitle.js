import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Dream Travel`
    },[title])
};

export default useTitle;