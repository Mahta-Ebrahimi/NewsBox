
import Search from './../components/Search';
import Sections from './../components/Sections';
import { useContext, useState } from 'react';
import { MainContext } from './../context/Provider';
import Footer from '../components/Footer';
import { useLocation } from 'react-router';
import { IoMdSettings } from 'react-icons/io'
import {Link } from "react-router-dom";
import { FiInbox } from 'react-icons/fi';
import { MdArrowBackIos } from 'react-icons/md'


const HeaderArchive= () => {

    const location=useLocation()

    return (
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>

            <Link to="/">
             <button style={{background:"white", border:"none"}}>
            {location.pathname === "/" ? <FiInbox size={25} />: <MdArrowBackIos size={25} />  }

            </button>
            </Link>
            <h1 style={{ margin: "0" }}>{location.pathname === "/" ? "NewsBox" : "Archive"}</h1>
            <Link to="/Setting">
            <button style={{background:"white", border:"none"}}>
            <IoMdSettings size={25} />
            </button>
            </Link>
            
        </header>
    );

}
 


function Archive() {

    const { news } = useContext(MainContext);

    let arrString = localStorage.getItem("archive");
    let arr = JSON.parse(arrString);
    console.log(arr);
    // let data = [];
    // for (let id of arr) {
    //     let newsFound = news.find(item => item.id == id);
    //     if (newsFound) data.push(newsFound); 
       
       
    // }

    const data = [];  // declare it before the loop

    if (Array.isArray(arr)) {
        for (let id of arr) {
            let newsFound = news.find(item => item.id == id);
            if (newsFound) data.push(newsFound);
        }
    }

    return (
        <>
            <HeaderArchive/>
            <Search />
            <Footer />
            <Sections data={data} />
        </>
    );
}

export default Archive;