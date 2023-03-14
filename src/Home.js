import ProductList from "./ProductList"

function Home({ data }) {


    return (
        <>
            <h1>This is home component </h1>

            <ProductList data={data} ></ProductList>
        </>
    )
}


export default Home