import Header from "../components/Header.jsx"
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import DropDownMenu from "../components/DropDownMenu.jsx"
import SearchBox from '../components/SearchBox.jsx'
import CardContainer from "../components/CardContainer.jsx"
import PopularCategories from "../components/PopularCategories.jsx"
import PopularProducts from '../components/PopularProducts.jsx'
import Lamborghini from '../assets/cars/Lamborghini.png'
import GWagon from '../assets/cars/GWagon.png'
import Mclaren720s from '../assets/cars/Mclaren720s.png'
import BMW from '../assets/cars/BMW-M4.png'
import Ferrari from '../assets/cars/Ferrari458.png'
import Porsche from '../assets/cars/Porsche.png'
import iPhoneXS from '../assets/phones/iphonexs.png'
import iPhoneX from '../assets/phones/iphonex.png'
import iPhone8 from '../assets/phones/iphone8.png'
import Note8 from '../assets/phones/note8.png'
import MI from '../assets/phones/mi5x.png'
import OnePlus from '../assets/phones/oneplus.png'
import Footer from "../components/Footer.jsx"
import React from 'react'
const Home = () =>{
    return(
        <>
        <Header />
        <FloatButton
      icon={<QuestionCircleOutlined />}
      type="default"
      style={{
        insetInlineEnd: 94,
      }}
    />
    <DropDownMenu />
    <SearchBox />
    <CardContainer />
    <PopularCategories/>
    <PopularProducts 
    heading="Popular in Cars" 
    height = "md:h-[150px] h-[100px]"
    img1src={Lamborghini} 
    img1alt="lamborghini-car" 
    price1="AED 3,000,000"
    disc1="Sports Car"
    para1="Lamborghini"
    img2src={GWagon} 
    img2alt="GWagon" 
    price2="AED 1,800,000"
    disc2="SUV"
    para2="G-Wagon"
    img3src={Mclaren720s} 
    img3alt="Mclaren" 
    price3="AED 3,000,000"
    disc3="Sports car"
    para3="Mclaren"
    img4src={BMW} 
    img4alt="BMW" 
    price4="AED 3,000,000"
    disc4="Sedan"
    para4="BMW M4"
    img5src={Ferrari} 
    img5alt="Ferrari" 
    price5="AED 1,800,000"
    disc5="Sports car"
    para5="Ferrari 458"
    img6src={Porsche} 
    img6alt="Porsche" 
    price6="AED 3,000,000"
    disc6="Sports car"
    para6="Porsche"
    link="/lambo"
    />
    <PopularProducts 
    heading="Popular in Phones" 
    height = "md:h-[250px] h-[180px]"
    img1src={iPhoneXS} 
    img1alt="iphoneXS" 
    price1="AED 1000"
    disc1="Apple"
    para1="iPhone XS"
    img2src={iPhoneX} 
    img2alt="iphone-x" 
    price2="AED 500"
    disc2="Apple"
    para2="iPhone X"
    img3src={iPhone8} 
    img3alt="iphone-8" 
    price3="AED 300"
    disc3="Apple"
    para3="iPhone 8"
    img4src={Note8} 
    img4alt="Note-8" 
    price4="AED 450"
    disc4="Samsung"
    para4="Note 8"
    img5src={MI} 
    img5alt="Mi" 
    price5="AED 100"
    disc5="Xiaomi"
    para5="MI 5X"
    img6src={OnePlus} 
    img6alt="oneplus" 
    price6="300"
    disc6="OnePlus"
    para6="9 Pro"
    link="/iphone"
    />
<Footer />
        </>
    )
}
export default Home;