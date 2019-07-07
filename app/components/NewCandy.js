import React, { Component } from 'react';

export default class NewCandy extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         description: '',
         quantity: '',
         imageUrl: '',
         successAlert: true,
         warningAlert: false,
      };
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   onChange(e) {
      this.setState({
         [e.target.name]: e.target.value,
      });
      if (this.state.name.length && this.state.description.length) {
         this.setState({
            warningAlert: true,
         });
      } else {
         this.setState({
            warningAlert: false,
         });
      }
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
      this.setState({
         successAlert: false,
      });
      setTimeout(() => {
         this.setState({
            successAlert: true,
         });
         this.props.history.push('/candies');
      }, 400);
   }
   render() {
      return (
         <div className="d-flex justify-content-center container mt-4 w-50 form-container">
            <form className="mt-5 mx-auto w-85 " onSubmit={this.handleSubmit}>
               <h1 className="m-4">Add to goodie bag</h1>
               <div className="form-group w-100 row">
                  <label
                     className="col-sm-2"
                     htmlFor="name"
                     className="col-sm-2"
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
               <div className="form-group w-100 row">
                  <label className="col-sm-2" htmlFor="description">
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
               <div className="form-group w-100 row">
                  <label className="col-sm-2" htmlFor="quantity">
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
               <div className="form-group w-100 row">
                  <label className="col-sm-2" htmlFor="imageUrl">
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
                     disabled={
                        !this.state.name.length ||
                        !this.state.description.length
                     }
                     className="btn btn-block btn-light w-100 mt-3"
                     type="submit"
                  >
                     Create
                  </button>
                  <div
                     hidden={this.state.successAlert}
                     className="alert alert-success w-100 mt-3"
                     role="alert"
                  >
                     Created Successfully!
                  </div>
                  <div
                     hidden={this.state.warningAlert}
                     className="alert alert-warning w-100 mt-3"
                     role="alert"
                  >
                     Neither name nor description can be empty!
                  </div>
               </div>
            </form>
         </div>
      );
   }
}
