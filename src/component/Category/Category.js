import './Category.css'

const Category = () => {

    return (
        <>
            <div className='container container-category'>
                <div className='row category-row'>
                    <p className='title-card'>Preferred category</p><hr></hr>
                    <div className='col-md-12 col-12 col-sm-12 col-lg-12 col-xl-12'>
                        <div className='row row-item-card'>
                        <div className='col-md-2 col-sm-3 col-6'>
                       
                       <div className="card">
                           <div className="card-header d-flex justify-content-center">
                               <img src='./assets/img/mobile.png' title="mobile" className='img-category ' />
                           </div>
                           <ul className="list-group list-group-flush">
                               <li className="list-group-item text-center">Mobile</li>
                           </ul>
                       </div>
                   </div>
                   <div className='col-md-2 col-sm-3 col-6'>
                   <div className="card">
                           <div className="card-header d-flex justify-content-center">
                               <img src='./assets/img/laptop.png' title="mobile" className='img-category ' />
                           </div>
                           <ul className="list-group list-group-flush">
                               <li className="list-group-item text-center">Laptop</li>
                           </ul>
                       </div>
                   </div>
                   <div className='col-md-2 col-sm-3 col-6'>
                   <div className="card">
                           <div className="card-header d-flex justify-content-center">
                               <img src='./assets/img/shoes.png' title="mobile" className='img-category ' />
                           </div>
                           <ul className="list-group list-group-flush">
                               <li className="list-group-item text-center">Shoes</li>
                           </ul>
                       </div>
                   </div>
                   <div className='col-md-2 col-sm-3 col-6'>
                   <div className="card">
                           <div className="card-header d-flex justify-content-center">
                               <img src='./assets/img/bicycle.png' title="bicycle" className='img-category ' />
                           </div>
                           <ul className="list-group list-group-flush">
                               <li className="list-group-item text-center">Bicycle</li>
                           </ul>
                       </div>
                   </div>
                   <div className='col-md-2 col-sm-3 col-6'>
                   <div className="card">
                           <div className="card-header d-flex justify-content-center">
                               <img src='./assets/img/bag.png' title="mobile" className='img-category ' />
                           </div>
                           <ul className="list-group list-group-flush">
                               <li className="list-group-item text-center">Bags</li>
                           </ul>
                       </div>
                   </div>
                   <div className='col-md-2 col-sm-3 col-6'>
                   <div className="card">
                           <div className="card-header d-flex justify-content-center">
                               <img src='./assets/img/make-up.png' title="make up" className='img-category ' />
                           </div>
                           <ul className="list-group list-group-flush">
                               <li className="list-group-item text-center">Make up</li>
                           </ul>
                       </div>
                   </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category