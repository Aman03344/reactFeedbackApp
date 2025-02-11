import React from "react";
import ListItems from "./ListItems";

const ListGroup = ({feedback, dlt, editfeedback}) => {
  return (
    <ul className=" w-full h-auto flex flex-col justify-center items-center">
        {
          feedback.map((feedbacks)=><ListItems key={feedbacks.id} feedbacks={feedbacks} dlt={dlt} editfeedback={editfeedback}/>)
        }    
    </ul>
  );
};

export default ListGroup;
