import React, { Component } from 'react';

export default class NewCandy extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         description: '',
         quantity: '',
         imageUrl: '',
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   onChange(e) {
      this.setState({
         [e.target.name]: e.target.value,
      });
   }
   handleSubmit(e) {
      e.preventDefault();
      const quantity = parseInt(e.target.quantity.value);
      const newCandy = {
         name: e.target.name.value,
         description: e.target.description.value,
      };
      if (e.target.imageUrl.value.length) {
         newCandy.imageUrl = e.target.imageUrl.value;
      }
      if (quantity >= 0 && quantity <= 10) {
         newCandy.quantity = quantity;
      }
      this.props.createCandy(newCandy);
   }
   render() {
      return (
         <div className="container w-50">
            <form onSubmit={this.handleSubmit}>
               <div className="form-group row">
                  <label
                     className="col-md-2"
                     htmlFor="name"
                     className="col-md-2"
                  >
                     Candy Name
                  </label>
                  <input
                     className="form-control col-sm-10"
                     onChange={this.onChange}
                     name="name"
                     type="text"
                     value={this.state.name}
                  />
               </div>
               <div className="form-group row">
                  <label className="col-md-2" htmlFor="description">
                     Candy Description
                  </label>
                  <input
                     className="form-control col-sm-10"
                     onChange={this.onChange}
                     name="description"
                     type="text"
                     value={this.state.description}
                  />
               </div>
               <div className="form-group row">
                  <label className="col-md-2" htmlFor="quantity">
                     Quantity
                  </label>
                  <input
                     className="form-control col-sm-10"
                     onChange={this.onChange}
                     name="quantity"
                     type="text"
                     value={this.state.quantity}
                  />
               </div>
               <div className="form-group row">
                  <label className="col-md-2" htmlFor="imageUrl">
                     Image Url
                  </label>
                  <input
                     className="form-control col-sm-10"
                     onChange={this.onChange}
                     name="imageUrl"
                     type="text"
                     value={this.state.imageUrl}
                  />
                  <button
                     className="btn btn-block btn-primary w-100"
                     type="submit"
                  >
                     Create
                  </button>
               </div>
            </form>
         </div>
      );
   }
}
