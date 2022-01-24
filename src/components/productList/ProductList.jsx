import "./productList.css"
import Product from '../product/Product'
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Vipul</h1>
                <p className="pl-desc">
                    Here are some piece of work I worked on. There are various technologies. 
                    It contains github repositories, some are already hosted on web
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList
