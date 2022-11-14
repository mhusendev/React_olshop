import './Search.css'
import Slide from '../../Slide/Slide'
import { useState } from 'react'
import ProductSearch from '../../ProductSearch/ProductSearch'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import BottomNav from '../../BottomNav/BottomNav'
import Sidebar from '../../Sidebar/Sidebar'
import React from "react";
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Search = () => {
    const [text, setText] = useState('')
    let query = useQuery();

    let final;
    const handleInput = (e) => {
        // console.log(e.target.value)
        final = e.target.value

    }
    const handleClick = () => {
        setText(final)
        //console.log(text)
    }
    return (
        <div className="container-home">
            <Navbar />

            <BottomNav />

            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Sidebar />
                    </div>
                    <div className='col'>
                        <ProductSearch produk={query.get('produk')} />
                    </div>

                </div>

            </div>
            <Footer />

        </div>
    )
}

export default Search