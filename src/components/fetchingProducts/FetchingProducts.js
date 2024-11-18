import {useFetch} from "../../hooks/useFetch";
import Grid from '@mui/material/Grid'; 
import ProductCard from "../common/productCard/ProductCard";

const FetchingProducts=()=>{

   const{data:products,loading}= useFetch("https://fakestoreapi.com/products");
    return(
        <div style={{ padding: '20px' }}>

      <Grid container spacing={3}> 
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
    );
};
export default FetchingProducts;