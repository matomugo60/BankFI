import React from "react";
import Transaction from "./Transaction";
import Select from "./Select"

// creating transactionslist

const TransactionsList = (props) => {

  let componentArray = props.transactions.map(transactionObj => {
    return <Transaction 
            key={transactionObj.id} 
            transaction={transactionObj} 
            deleteTransactionFun={props.deleteTransactionFun}
          />
  })


  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
            < Select select={props.select} selectFun={props.selectFun}/>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {componentArray}
      </tbody>
    </table>
  );
};

export default TransactionsList;
