import './Detail.css'
import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import BottomNav from '../../BottomNav/BottomNav'
import Sidebar from '../../Sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from '../../../axios'
import { useReactTable } from '@tanstack/react-table'
import { checkCookie, getInfo } from '../../../helper/Helper'
import config from 'react-global-configuration'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

let datacolum = []
let dataoption = []
const Menutab = ({menu, data_pass, data_option}) => {
  //  console.log(data_pass)
    const [optionCart, setoptionCart] = useState('')
  const getAlert  = (message,classname) =>{
    var alert = document.getElementById('alert_addcart');
    alert.innerHTML = `<div class="alert ${classname}" role="alert">
    ${message}
  </div>`
  setTimeout(()=>{
    alert.innerHTML=''
  },1000)
  }
    const handleAddCart = (e) => {
       e.preventDefault()
     let quantity =document.getElementById('jumlahproduk').value
    //  console.log(quantity)
      if(dataoption.length != 0 && optionCart === ''){
        getAlert('Harap pilih Jenis','alert-warning')
      } 
    
      else{
        if(quantity !== null && quantity <= 0){
          getAlert('Masukan Jumlah Produk','alert-warning')
        } else {
      // console.log(dataoption.length)
      let dataCostumer = getInfo()._json
   
      let finalcart ={
        idproduk:parseInt(data_pass.id),
        idcustomer:dataCostumer.sub,
        qty:quantity,
        // harga:data_pass.harga_jual_ppn,
        // berat:data_pass.berat,
        // satuan_berat: data_pass.satuan_berat,
        option_produk: optionCart
  
      }
     
     
      // console.log(finalcart)
      if(checkCookie()){
        axios.post(config.get('addCart'), finalcart)
        .then(response => {
            getAlert(response.data.message,'alert-success')
            window.location.reload()
        })
        .catch(error => {
            console.error('There was an error!', error);
            getAlert(error,'alert-danger')
            
        });
      } else {
        getAlert("Harap login dulu",'alert-warning')
      }
      }
    }
      
    }
  
    var hanldeChoose = (e,items) => {
      // e.preventDefault()
      setoptionCart(items)
      // console.log(optionCart)
    }
  //  console.log(arr)
   if(menu === "Shop"){
    return (
      <>
      <div className='row'>
      <div className='col-md-4 col-sm-4 col-4 col-lg-4 col-xl-3'>
       <input type='number' className='form-control' min='0' placeholder='0' id='jumlahproduk'/>
      </div>
      </div>
  
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-12 col-xl-12 col-lg-12'>
          <br/>
          <p>Option:</p>
          <div className='div-table'>
          <table className='table table-bordered table-responsive'>
         
         <thead>
           <tr>
           {
         Object.keys(datacolum).map(key => 
      
           key!=='idproduk'?<th key={key} >{key}</th> : ''
           // console.log(key)
           
           )
       }
           </tr>
        
         </thead>
         <tbody>
         {dataoption.map((items,index) => {

            return (
            
             <tr key={index+'b'}>
               <td>{items.tambahan_harga}</td>
               <td>{items.ukuran}</td>
               <td>{items.warna}</td>
               <td>{items.qty}</td>
             
               <td><input type="radio" name='fav_language' onClick={e => hanldeChoose(e,items)} id="radio-cart"/></td>

             </tr>
           
            )
         })

         }
         </tbody>
       </table>
          </div>
       
          <button className='btn btn-primary add-cart-btn' onClick={handleAddCart} >Add to Cart</button>
          <div id='alert_addcart'></div>
        </div>
      </div>
      </>
    )
   } else {
    return <>
    <h3>{menu}</h3>
    <p>{data_pass.deskripsi}</p>
    
    </>
   }
   
  }
const Detail = () => {
  let menuTab = ["Shop", "Detail", "Rate" ]
  
  let query = useQuery();
  const [active, setActive] = useState(0);
  const [menuChoose, setmenuChoose] = useState('Shop')
  const [data, setData] = useState({});

  const handleTab = (event, params, menu) => {
    event.preventDefault();
    setActive(params)
    setmenuChoose(menu)

  }
  // fetch axios 
  const getDetail = async () => {
    const { data } = await axios.get(config.get('getByidproduk')+query.get('pid'));
    if(data.option_produk.length != 0){
      data.option_produk[0].pilihan = ''
      datacolum = data.option_produk[0]
      dataoption = data.option_produk
     
    }
    else {
      datacolum = { 'No option':''}
    }
    setData(data);

};
useEffect(() => {
    getDetail();
   
},[])

  const navActive = (id) => {

        
    if(id === active) {
      return "nav-link active"
    } else 
    {
      return "nav-link"
    }
  }
  return (<>
    <Navbar />

    <BottomNav />

    <section className='detail-sec-produk'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 col-sm-12 col-12'>
            <img src={'./assets/images/'+data.img_cover} className='img-detail' ></img>
          </div>
          <div className='col'>
            <div className='detail-produk'>
              <h3>{data.nama_barang}</h3>
              <h5>{data.harga_jual_ppn}</h5>
              <hr></hr>
              <ul className="nav nav-tabs">
                {menuTab.map((tab,id) => {

                  return (
                
                      <li className="nav-item" key={tab}>
                        <button className={navActive(id)} aria-current="page" onClick={event => handleTab(event, id , tab)} >{tab}</button>
                      </li>
                    
                  )
                })}


              </ul>
              <div className='menu-tab'>
                 <Menutab menu={menuChoose} data_pass={data} data_option={data.option_produk}/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <Footer />
  </>)
}


export default Detail