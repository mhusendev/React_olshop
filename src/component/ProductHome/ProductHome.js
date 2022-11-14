import { useEffect, useState } from 'react'
import axios from '../../axios.js'
import './ProductHome.css'
import config from 'react-global-configuration'
import { Link } from 'react-router-dom'

const ProductHome = () => {
    const [data, setData] = useState([]);
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    const getDataProduk = async () => {
        const { data } = await axios.get(config.get('getProduk'));
        for (let i in data.products) {
            data.products[i].harga_jual = formatter.format(data.products[i].harga_jual)
        }
        setData(data.products);
        // console.log(data)
    };
    useEffect(() => {
        getDataProduk();
    },[])
    return (
        <>
            <div className='container container-product-home'>
                <div className='row product-row'>
                    <p className='title-card'>Official product</p><hr></hr>
                    {data.map(items => {
                        return (
                            <div className='col-md-2 col-sm-3 col-6' key={items.id} >
                                <div className="card">
                                    <div className="card-header d-flex justify-content-center">
                                        <img src={'./assets/images/' + items.img_cover} title="mobile" className='img-product-home' alt={items.img_cover} />
                                    </div>
                                    <ul className="list-group ">

                                        <li className="desc-product">{items.nama_barang}</li>
                                        <p className="card-text">{items.harga_jual}</p>
                                        <p className='card-star'> <span className="fa fa-star star-checked"></span>
                                            <span className="fa fa-star star-checked"></span>
                                            <span className="fa fa-star star-checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span></p>

                                        <p className="card-text2">Harga sudah termasuk PPN</p>
                                        <li className='wrap-btn-cart'><div className='btn-group'><a className='btn btn-add-cart' href={'/detail?pid='+items.id+'&slug='+items.slug} title='Detail Produk' ><i className="fas fa-eye" aria-hidden="true"></i></a> <button className='btn btn-add-wish' title='Save to Wishlist'> <i className="far fa-heart"></i></button></div></li>
                                    </ul>
                                </div>
                            </div>
                        )

                    })}



                </div>
            </div>
        </>
    )
}
export default ProductHome