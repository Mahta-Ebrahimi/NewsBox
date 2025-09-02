
import { BiSearch } from 'react-icons/bi'

import React, { useState } from "react";


const Search = () => {
    return (
        <div>
            <form style={{ display: "flex", alignItems: "center", backgroundColor: "#eee", borderRadius: "10px", padding: "10px", margin: "10px" }}>
                <input placeholder='Search News' style={{ border: "none", outline: "none", background: "none", flexGrow: "1" }} />
                <BiSearch />
            </form>
        </div>
    );
}









export default Search;