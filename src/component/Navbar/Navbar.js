import './Navbar.css'
import { checkCookie, getInfo } from '../../helper/Helper'
import { useEffect, useState } from 'react';
import config from 'react-global-configuration'
import axios from '../../axios'

const ViewLogin = () => {

    var [cartCount, setcartCount] = useState(0)
    let info = getInfo()
    const getListLength = () =>{
        let id_customer;
     
        if(getInfo()) {
            id_customer = {idcustomer : getInfo()._json.sub}
            axios.post(config.get('listCart'), id_customer)
            .then(response => {
               console.log(response.data)
               setcartCount(response.data.products.length)
            })
            .catch(error => {
                console.error('There was an error!', error);
                
            });
        }
    }
    useEffect(()=>{
        if(document.getElementById('jumlahcart')){
            if(cartCount <= 0) {
                document.getElementById('jumlahcart').style.display ='none'
             } else {
                document.getElementById('jumlahcart').style.display ='block'
             }
        }
        getListLength()
    },[cartCount])
    
        if (checkCookie()) {

            return (<>
                <div className="px-5 menu-shopping ms-auto">
                    <div className="hstack gap-2">
                        <a href="#"><i className="far fa-heart"></i></a>
                        <i className="fas fa-shopping-cart" aria-hidden="true"></i> <span className="badge bg-danger" id='jumlahcart'>{cartCount}</span>
                        <a href="#"><i className="fas fa-user" aria-hidden="true"></i></a>
                        <a href="http://localhost:8080/auth" className="btn btn-sm btn-default">{info._json.username}</a>
                    </div>
                </div></>)
        } else {
            return (<>
                <div className="px-5 menu-shopping ms-auto">
                    <div className="hstack gap-2">
                      
                    <a className="btn btn-sm btn-default btn-info-cart" href='#'>
                 
                </a>
                        <a href="http://localhost:8080/auth" className="btn btn-sm btn-default">Login</a>
                        <a href="#" className="btn btn-sm btn-default">Register</a>
                    </div>
                </div></>)
        }
    
}

const Navbar = () => {
  
   
    // console.log(getInfo())
    const [data, setData] = useState();
    const handleClick = (e) => {
        e.preventDefault()
        var searchdata = document.getElementById('search_box').value
        setData(searchdata)
        console.log(data)
        window.location.href ='./search?produk='+searchdata
    }
    const handlePress = (e) => {
        if (e.keyCode === 13) {
            var searchdata = document.getElementById('search_box').value
        setData(searchdata)
        console.log(data)
        window.location.href ='./search?produk='+searchdata
        } else {

        }
       
    }

  
    return (
        <div className="container-nav">

            <div className="bg-blue-light mini-menu-top">
                <div className="container">
                    <div className="hstack gap-3">

                        <div>HOTLINE CALLING (62) 021 1234567</div>
                        <div className="ms-auto">Second item</div>
                        <div className="vr"></div>
                        <div>Third item</div>
                    </div>
                </div>

            </div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-blue-light">
                <div className="container-xl">
                    <a className="navbar-brand logo" href="./">Mallada.id</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse my-2 mr-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategori
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="menukategori">

                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <form id="form_search" className="form-control form-search-mobile">
                        <div className="input-group">

                            <input id="search_box" autoComplete="off" name="search" type="search"
                                className="form-control form-control-sm" placeholder="Pencarian" aria-label="Pencarian"
                                aria-describedby="button-search"  onKeyUp={handlePress}/>
                            <button className="btn btn-warning btn-sm" onClick={handleClick} type="submit" id="button-search"><i className="fa fa-search"
                                aria-hidden="true"></i>
                                
                            </button>
                        </div>
                    </form>
                    <ViewLogin/>


                </div>
            </nav>
        </div>
    )
}

export default Navbar