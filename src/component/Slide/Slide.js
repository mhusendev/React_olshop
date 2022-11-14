import { useEffect, useState } from 'react';
import axios from '../../axios.js'
import './Slide.css'
import config from 'react-global-configuration'

const Slide = () =>{
    const [dataslide, setDataSlide] = useState([]);
    const getDataSlide = async () => {
        const { data } = await axios.get(config.get('slideShow'));
        setDataSlide(data);
        // console.log(data)
      };
      useEffect(() => {
        getDataSlide();
    }, [])
    return (
        <>
        <div className="container mt-3">
        <div id="slideshowbanner" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

            { dataslide.map(items => {
                return (
                <div className="carousel-item active" key={items.id}>
                    <img src={'./assets/images/'+ items.img} className="d-block w-100" alt="img"/>
                </div>
                )
            })}
                
           
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#slideshowbanner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#slideshowbanner" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
        </>
    )
}

export default Slide