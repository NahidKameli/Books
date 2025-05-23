import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import styles from './SearchBox.module.css';

function SearchBox({search, setSearch, searchHandler}) {

    return (

        <div className={styles.container}>
            <input type="text" placeholder='Search Title' value={search} onChange={e=>setSearch(e.target.value.toLowerCase())}/>
            <button style={{background:"none", border:"0"}} onClick={searchHandler}>
                <BsSearch style={{ marginLeft: "4px", marginTop: "2px", cursor:"pointer" }} />
            </button>
        </div>
    )
}

export default SearchBox