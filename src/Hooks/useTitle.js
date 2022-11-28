import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Easy Phones`
    },[title])
};

export default useTitle;