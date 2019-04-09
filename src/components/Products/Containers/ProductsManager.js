import {connect} from 'react-redux';
import React, {Component} from 'react';
import addToCart from '../ProductActions';
import ShowProducts from '../ShowProducts/ShowProducts';
import './ProductManager.css'

export class ProductsManager extends Component {
    handleAddToCart = data => {
        this.props.addToCart({
            name: data.name,
            price: data.price,
            id: data.id,
            quantity: 1,
            productQuantity: data.quantity,
        });
    }

    render(){
        return(
            <div className="productContainer">
                {this.props.products.products.map(product => {
                    return(
                        <ShowProducts
                            handleAddToCart={this.handleAddToCart}
                            key={product.id}
                            data={product}
                            isAddedToCart={product.isAddedToCart}
                        />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {products: state.products}
}

const mapDispatachToProps = {
    addToCart
}

export default connect(
    mapStateToProps,
    mapDispatachToProps
)(ProductsManager);