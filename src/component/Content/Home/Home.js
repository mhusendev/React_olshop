import './Home.css'
import Slide from '../../Slide/Slide'
import { useState } from 'react'
import Category from '../../Category/Category'
import ProductHome from '../../ProductHome/ProductHome'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import BottomNav from '../../BottomNav/BottomNav'
import Sidebar from '../../Sidebar/Sidebar'
const Home = () => {
    const [text, setText] = useState('')
    let final;
    const handleInput = (e) => {
     // console.log(e.target.value)
      final = e.target.value

    }
    const handleClick = () =>{
      setText(final)
      //console.log(text)
    }
    return (
        <div className="container-home">
          <Navbar />
        
          <Slide />
          <BottomNav />
          <Category />
          <ProductHome />
        
          <Footer />
          
        </div>
    )
}

export default Home