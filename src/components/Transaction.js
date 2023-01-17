import React from "react";

// Creating transaction

const Transaction = (props) => {

  let {date, description, category, amount} = props.transaction

  // function to delete transaction
  
  let handledelete = (evt) => {
    fetch(`http://localhost:3000/transactions/${props.transaction.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedTransaction => {
      props.deleteTransactionFun(props.transaction)
    })
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handledelete}>X</button></td> 
    </tr>
  );
};

export default Transaction;