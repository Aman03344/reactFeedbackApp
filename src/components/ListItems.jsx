import React from "react";

const ListItems = ({feedbacks,dlt, editfeedback}) => {
  return (
    <li className=" w-[55%] border-2 border-white mt-5 p-4 rounded-2xl text-white md: w-[90%]">
      <h1 className=" text-4xl">{feedbacks.rating}⭐</h1>
      <p className=" text-xl py-2">{feedbacks.review}</p>
      <p className=" text-sm">Thank for your precious feedback</p>
      <button onClick={()=>dlt(feedbacks.id)} className=" border-2 px-4 py-1.5 mx-1 rounded-lg float-end cursor-pointer md: mt-6">
        Delete
      </button>
      <button onClick={()=>editfeedback(feedbacks)} className=" border-2 px-4 py-1.5 mx-1 rounded-lg float-end cursor-pointer md: mt-6">
        Edit
      </button>
    </li>
  );
};

export default ListItems;
