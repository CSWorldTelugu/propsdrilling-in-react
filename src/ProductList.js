import Product from "./Product"

function ProductList({ data }) {


    return (
        <>
            <h1>This is ProductList component </h1>
            <Product data={data}></Product>
        </>
    )
}


export default ProductList