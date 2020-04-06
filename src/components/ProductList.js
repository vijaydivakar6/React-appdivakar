import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import Carousal from "./Carousal";
import {ProductConsumer}from "../components/context";


export default class ProductList extends Component {
    
    render() {


        return (
            <React.Fragment>
       <div className="">
       <Carousal/>
           <div className="container">
               <Title name="our" title="products"/>
               
               <div className="row">
               <ProductConsumer>
                    {value =>{
                       return value.products.map(product =>{
                           return <Product key ={product.id} product=
                           {product}/>;
                       });
                    }}
                   
                </ProductConsumer>
        
               </div>
              
              
           </div>
       </div>
        </React.Fragment>
        );
    }
}

// export default ProductList;