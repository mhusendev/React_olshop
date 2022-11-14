import { Link } from 'react-router-dom'
import './BottomNav.css'
const BottomNav = () => {
    return (
        <>
            <div className="bottomnav">
                <div className='row row-btmnav'>
                    <div className='col-md-3 col-sm-3 col-3'>
                    <Link className='btn btn-outline-warning btn-nav' to='/home'><i className="fas fa-home" aria-hidden="true"></i></Link>
                    </div>
                    <div className='col-md-3 col-sm-3 col-3'>
                    <button className='btn btn-outline-warning btn-nav'><i className="fas fa-heart" aria-hidden="true"></i></button>
                    </div>
                    <div className='col-md-3 col-sm-3 col-3'>
                    <button className='btn btn-outline-warning btn-nav'><i className="fas fa-shopping-cart" aria-hidden="true"></i></button>
                    </div>
                    <div className='col-md-3 col-sm-3 col-3'>
                    <button className='btn btn-outline-warning btn-nav'><i className="fas fa-user" aria-hidden="true"></i></button>
                    </div>
                  
                 
                </div>
            </div>
        </>
    )
}
export default BottomNav
