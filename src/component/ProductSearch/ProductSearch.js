import { useEffect, useState } from 'react'
import axios from '../../axios.js'
import './ProductSearch.css'
import config from 'react-global-configuration'

const CheckResult = ({data_produk}) => {
    const [data, setData] = useState([]);
  

    useEffect(() => {
        const getDataProduk = async () => {
            var formatter = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
            });
            const { data } = await axios.get(config.get('searchProduk')+data_produk);
            for (let i in data.products) {
                data.products[i].harga_jual = formatter.format(data.products[i].harga_jual)
            }
            setData(data.products);
            // console.log(data)
        };
        getDataProduk();
    },[data_produk])

    if(data.length === 0) {
        return(<>
        <div className='d-flex justify-content-center'>
            <p className='mt-5'>Produk Tidak Ditemukan</p>
        </div>
        </>)
    } else {
        return (<>
            { 
                    data.map(items => {
                        return (
                            <div className='col-md-3 col-sm-3 col-6' key={items.id} >
                                <div className="card">
                                    <div className="card-header d-flex justify-content-center">
                                        <img src={'./assets/images/' + items.img_cover} title="mobile" className='img-product-home' alt={items.img_cover} />
                                    </div>
                                    <ul className="list-group ">

                                        <li className="desc-product">{items.nama_barang}</li>
                                        <p className="card-text"><b>{items.harga_jual}</b></p>
                                        <p className='card-star'> <span className="fa fa-star star-checked"></span>
                                            <span className="fa fa-star star-checked"></span>
                                            <span className="fa fa-star star-checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span></p>

                                        <p className="card-text2">Harga sudah termasuk PPN</p>
                                        <li className='wrap-btn-cart'><div className='btn-group'><button className='btn btn-add-cart'><i className="fas fa-eye" aria-hidden="true"></i></button> <button className='btn btn-add-cart'> <i className="far fa-heart"></i></button></div></li>
                                    </ul>
                                </div>
                            </div>
                        )

                    })}</>)
    }

}

const ProductSearch = ({produk}) => {
  
    return (
        <>
            <div className='container container-product-home'>
                <div className='row product-row'>
                    <p className='title-card'>Result {produk}</p><hr></hr>
                
                   <CheckResult data_produk={produk} />
                     

                </div>
            </div>
        </>
    )
}
export default ProductSearch