import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [feedback, setFeedback] = useState([
 
  ]);

  const dlt = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addfeedback = (rating, review) => {
    setFeedback([{ id: crypto.randomUUID(), rating, review }, ...feedback]);
  };

  const [edit, setEdit] = useState({
    feedback: {},
    isEdit: false,
  });

  const editfeedback = (feedback) =>{
    setEdit({
      feedback: feedback,
      isEdit: true
    })
  }

  const updatefeedback =(updatedfeedback)=>{
    setFeedback(feedback.map((feedback)=> feedback.id === updatedfeedback.id ? updatedfeedback : feedback))
    setEdit({
      feedback: {}, isEdit: false
    })
  }

  return (
    <>
      <Navbar />
      <Form addfeedback={addfeedback} edit={edit} updatefeedback={updatefeedback} />
      <ListGroup feedback={feedback} dlt={dlt} editfeedback={editfeedback} />
    </>
  );
};

export default App;
