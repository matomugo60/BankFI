import React from "react";

//Creating select

const Select = (props) => {


    let handleSelect = (evt) => {
        props.selectFun(evt.target.value)
    }

  return (
   <div>
     <select value={props.select} onChange={handleSelect}>
        <option value={"all"}>All</option>
        <option value={"descriptionUP"}>Description</option>
        <option value={"categoryUP"}>Category</option>
        <option value={"amountUP"}>Amount</option>
        <option value={"dateUP"}>Date</option>
     </select>
   </div>
  )
}

export default Select;