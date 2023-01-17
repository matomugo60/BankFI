import React, { Component } from "react";

// Creating AddTransactionForm

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

// POST function using fetch

  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:3000/transactions', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(r => r.json())
    .then(addTransaction => {
      this.props.addTransactionFun(addTransaction)
      this.setState({
        date: "",
        description: "",
        category: "",
        amount: ""
      })
    })

  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }

  //Using render to manupilate DOM
  
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="date" 
              name="date" 
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              value={this.state.category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" > 
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;