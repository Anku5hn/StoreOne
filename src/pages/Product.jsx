import React from 'react'
import {FloatButton, Rate, Button} from 'antd'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import {QuestionCircleOutlined,RightOutlined,TruckOutlined,CreditCardOutlined,  } from '@ant-design/icons'
import {Link} from 'react-router-dom'
import {useCart} from '../ContextAPI/CartContext.jsx';//import custom hook from context api file
const Product = (props) =>{
    const {addItem} = useCart();//use the custom hook
    const product = props.product;
    return(
    <>
        <div className='w-full dark:bg-black bg-white md:hidden lg:hidden fixed bottom-0 h-[75px]'>
            <button className="w-[calc(100%-10px)] mx-[5px] h-10 mb-[5px] rounded-md bg-red-500 text-white">Add To Cart</button>
            <div className="w-full justify-around flex dark:text-white text-black"><p>Home</p><p>Cart</p></div>
        </div>
        <Header />
        <FloatButton
            icon={<QuestionCircleOutlined />}
            type="default"
            style={{
                insetInlineEnd: 94,
            }} />
        <div className="w-full items-center flex-col flex h-[500px] mt-10 text-black dark:text-white">
            <div className="w-5/6 text-gray-500"><Link to="/"><span className="text-gray-500 hover:text-gray-900">Home</span></Link><RightOutlined className="mt-1" />{props.category}<RightOutlined className="mt-1" />{props.linkName}</div>
            <div className="w-5/6 flex flex-col gap-5 items-center md:flex-row md:justify-around md:items-start mt-5">
                <div className={`${props.imgWidth} h-auto`}>
                    <img src={props.itemImg} alt={props.itemAlt} className="rounded-sm"/>
                </div>
                <div className="w-[200px] h-[200px]">
                    <h2 className="text-gray-500">{props.company}</h2>
                    <p className="text-xl mt-1">{props.mainName}</p>
                    Ratings: <Rate />
                    <p className="text-red-500 text-2xl mt-1">AED {props.price}</p>
                    <p className="bg-green-200 text-green-500 p-1 w-[50px] rounded-sm text-xs mt-1">{props.discount}% Off</p>
                    <p><TruckOutlined /> Free Delivery</p>
                    <p className="bg-linear-to-bl from-violet-500 to-fuchsia-500 p-1 rounded-sm mt-1"><CreditCardOutlined /> Pay in 4 simple interest free payments</p>
                    <p className="bg-linear-to-bl from-green-200 to-green-600 p-1 rounded-sm mt-1">Earn Cashback On StoreOne Card</p>
                    <p className="mt-2"><span className="bg-linear-to-bl from-yellow-200 to-yellow-600 p-1 rounded-sm mt-1 font-bold">Express</span> Get it by tomorrow!</p>
                    <Button variant="solid" color="danger" className="mt-2"><span className="text-xl font-bold" onClick={()=>{addItem(product)}}>Add To Cart</span></Button>{/*just a button and function name*/}
                </div>
            </div>

        </div>
        <div className="mt-[100px]">
            <Footer />
        </div>

    </>
    )
}
export default Product;