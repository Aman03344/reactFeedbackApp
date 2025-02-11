import React, { useEffect, useState } from "react";

const Form = ({ addfeedback , edit,updatefeedback}) => {
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    if(edit.isEdit === true){
      updatefeedback({id:edit.feedback.id , rating, review})
    }else{
      addfeedback(rating, review);

    }
    setRating("");
    setReview("");
  };

  useEffect(()=>{
    setRating(edit.feedback.rating)
    setReview(edit.feedback.review)

  },[edit])

  return (
    <div className=" w-full h-auto flex justify-center items-center">
      <form
        onSubmit={(e) => handleSub(e)}
        className=" border-2 border-white w-[55%] mt-4 p-5 rounded-2xl md: w-[90%]"
      >
        <select
          required
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className=" border-2 border-white rounded-2xl w-full p-3 text-white"
        >
          <option className="bg-[#313131]" value="1">
            1
          </option>
          <option className="bg-[#313131]" value="2">
            2
          </option>
          <option className="bg-[#313131]" value="3">
            3
          </option>
          <option className="bg-[#313131]" value="4">
            4
          </option>
          <option className="bg-[#313131]" value="5">
            5
          </option>
        </select>
        <textarea
          required
          onChange={(e) => setReview(e.target.value)}
          value={review}
          className=" w-full border-2 border-white mt-4 rounded-2xl text-white px-2 py-3"
          placeholder=" Enter your feedback here...."
        ></textarea>
        <button className=" w-full mt-4 border-2 border-white bg-white font-bold rounded-2xl py-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
