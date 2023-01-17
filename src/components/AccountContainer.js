// Using import to use data in other files
import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

// Creating AccountContainer
class AccountContainer extends Component {

  state = {
    transactions : [],
    search: "",
    select: "all"
  } 
// Using fetch to get data from server
  componentDidMount(){
    fetch('http://localhost:3000/transactions')
    .then(r => r.json())
    .then(resp => {
      this.setState({
        transactions: resp
      })
    })
  }

  // To add a new transaction

  addTransactionFun = (addTransaction) =>{
    this.setState(prevState => {
      return {
        transactions: [...prevState.transactions, addTransaction]
      }
    })
  }
// to delete a transaction

  deleteTransactionFun = (deletedTransaction) => {
    let newTransArr = this.state.transactions.filter(transaction => {
      return transaction.id !== deletedTransaction.id
    })

    this.setState({
      transactions: newTransArr
    })
  }

// Creating a search function

  searchFun = (searchResult) => {
    this.setState({
      search: searchResult
    })
  }

  // creating a function for selecting

  selectFun = (selectedResult) => {
    this.setState({
      select: selectedResult
    })
  }

// A function used to filter searches

  filterSearchTransactions = () => {
    let {transactions, search, select} = this.state
    
    let filterSearch = transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(search.toLowerCase())
    })

    // function switch

    switch(select){
      case "all" :
        return filterSearch

      case "descriptionUP" : 
        return filterSearch.sort( (wordA, wordB) => {
            return wordA.description.localeCompare(wordB.description)
        })

    
        
      case "categoryUP" : 
      return filterSearch.sort( (wordA, wordB) => {
          return wordA.category.localeCompare(wordB.category)
      })

   
      case "amountUP" : 
      return filterSearch.sort( (numA, numB) => {
          return numA.amount - numB.amount
      })

     

      case "dateUP" : 
      return filterSearch.sort( (numA, numB) => {
          return new Date(numA.date) - new Date(numB.date)
      })

     

      default:
    }
  }

// using render to manupilate the DOM

  render() {
    return (
      <div>
        <Search 
           searchValue={this.state.search}
           searchFun={this.searchFun}
        />

        <AddTransactionForm 
          addTransactionFun={this.addTransactionFun}
        />

        <TransactionsList
          transactions={this.filterSearchTransactions()}
          select={this.state.select}
          selectFun={this.selectFun}
          deleteTransactionFun={this.deleteTransactionFun}
         />
      </div>
    );
  }
}

// Exporting data to be used elsewhere

export default AccountContainer;