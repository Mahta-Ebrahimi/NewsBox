import { createContext, useEffect, useState } from "react";

export const MainContext = createContext({
    theme: 'light',
    setTheme: () => { },
    forceUpdate: () => { },
    update: false,
 
    handleGetData: () => { }
})


const Provider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const [update, forceUpdate] = useState(false)

    const [news, setNews] = useState([])

    const handleGetData = async () => {
        let response = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=m4QaRc6Zfpe8gns5XS7FEAnqy4TsrJKx")
        let data = await response.json()

        let categ = [...new Set(data?.results?.map(item => item?.section))]
        let arrString = localStorage.getItem("categories");

        if (!arrString && categ?.length > 0) {
            localStorage.setItem("categories", JSON.stringify(categ))
        }
        setNews(data.results)
    }

    useEffect(() => {
        let theme = localStorage.getItem("theme")
        if (!theme) localStorage.setItem("theme", "light")
        handleGetData()
    }, [])

    return (
        <MainContext.Provider value={{ theme, setTheme, forceUpdate, update, news, handleGetData }}>
            {children}
        </MainContext.Provider>
    );
}

export default Provider;