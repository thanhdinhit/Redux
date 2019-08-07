import React from 'react';
import axios from 'axios';

export default class ProductList extends React.Component {
  state = {
    nameGet: [],
    name: '',
    id: ''
  }
  url = 'http://5d4a83cd5c331e00148eb32c.mockapi.io/api'

  // Post method
  handleChangePost = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmitPost = event => {
    event.preventDefault();

    const namePost = {
      name: this.state.name
    };

    axios.post(this.url + '/products', namePost)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }
  // Delete method

  handleChangeDelete = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmitDelete = event => {
    event.preventDefault();

    axios.delete(this.url + `products/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  //Get method

  componentDidMount() {
    axios.get(this.url + '/products')// (https://jsonplaceholder.typicode.com/users)
      .then(res => {
        const nameGet = res.data;
        this.setState({ nameGet });
      })
  }

  render() {
    return (
      <div style = {{marginLeft : '12px'}}>
        <ul>
          <label>Get API-----------</label>
          {this.state.nameGet.map(product => <li key={product.id}>name:  {product.name} ------ id: {product.id} ------ price: {product.price}</li>)}
        </ul>

        <form onSubmit={this.handleSubmitPost}>
          <label>
            Product Name:
            <input type="text" name="name" onChange={this.handleChangePost} style = {{marginLeft : '12px'}}/>
          </label>
          <button type="submit">+ Add +</button>
        </form>

        <form onSubmit={this.handleSubmitDelete} style = {{marginTop : '20px'}}>
          <label>
            Product ID:
            <input type="text" name="id" onChange={this.handleChangeDelete} style = {{marginLeft : '35px'}}/>
          </label>
          <button type="submit">- Delete -</button>
        </form>
      </div>
    )
  }
}

