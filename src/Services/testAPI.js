import React from 'react';

import axios from 'axios';

export default class ProductList extends React.Component {
  state = {
    products: [],
  }
  url = 'http://5d4a83cd5c331e00148eb32c.mockapi.io/api'

  componentDidMount() {
    axios.get(this.url + '/products')// (https://jsonplaceholder.typicode.com/users)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }name

  render() {
    return (
      <ul>
        {this.state.products.map(product => <li key = {product.id}>{product.name}</li>)}
      </ul>
    )
  }
}
