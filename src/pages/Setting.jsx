import { useContext } from 'react';
import { MainContext } from './../context/Provider';
import { MdArrowBackIos, MdLiveTv } from 'react-icons/md';
import { FiInbox } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { variables } from './../variable/variable';
import ReactSwitch from 'react-switch';
import { useState } from 'react';
import { useEffect } from 'react';



const HeaderS = () => {

  const location = useLocation()


  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>

      <Link to="/">
        <button style={{ background: "white", border: "none" }}>
          {location.pathname === "/" ? <FiInbox size={25} /> : <MdArrowBackIos size={25} />}

        </button>
      </Link>
      <h1 style={{ display: "flex", margin: "auto" }}>{location.pathname === "/" ? "NewsBox" : "Setting"}</h1>
    </header>
  );
}

const SettingPage = () => {
  const { news, forceUpdate, update } = useContext(MainContext)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    let arrString = localStorage.getItem("categories");
    setCategories(JSON.parse(arrString))
  }, [news])

  const handleChange = (checked, item) => {
    let arrString = localStorage.getItem("categories");
    let cats = JSON.parse(arrString)
    if (checked) {
      cats.push(item)
    } else {
      cats = cats.filter(it => it !== item)
    }
    localStorage.setItem("categories", JSON.stringify(cats))
    setCategories(cats)
  }

  const handleChangeTheme = () => {
    let darkmode = localStorage.getItem("theme") === "Dark"

    if (darkmode) localStorage.setItem("theme", "Light")
    else localStorage.setItem("theme", "Dark")
    forceUpdate(!update)
  }

  return (
    <div>
      <HeaderS />
      <section style={{ backgroundColor: "#C8D1D3", height: "auto", paddingBottom: "50px" }}>
        <h2 style={{ color: "#87BCBF", fontSize: "35px", display: "flex", justifyContent: "center" }}>Manage</h2>
        <h3 style={{ fontSize: "20px", display: "flex", justifyContent: "center", marginTop: "-25px" }}>Categories</h3>
        
        <div style={{ background: "white", borderRadius: "40px", margin: "10px", padding: "50px" }}>
          {[...new Set(news?.map(item => item?.section))]?.map(item =>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{item}</p>
              <ReactSwitch onChange={(checked) => handleChange(checked, item)} checked={categories?.find(cat => cat === item)} uncheckedIcon={false} checkedIcon={false} offColor={"#ccc"} onColor={"#00cccc"} />
            </div>
          )}
        </div>
        <button  style={{display:"flex",margin:"30px auto",padding:"25px 45px",borderRadius:"30px",border:"none",boxShadow:"5px black",fontWeight:'bold'}} onClick={handleChangeTheme}>
          {`Toggle ${localStorage.getItem("theme") === "Dark" ? "Light" : "Dark"} Mode`}</button>

      </section>
    </div>
  );
}


export default SettingPage;
