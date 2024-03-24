import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function MyTextArea() {
  const [someText, setSomeText] = useState('');
  const doSome = (e) => {
    console.log("This is : " +e);
        const inputValue = e.target.value;
        setSomeText(inputValue);
  };

  return (
    <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" value={someText}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name="someText"
          value={someText}
          style={{ height: "100px" }}
          onChange={doSome}
        />
      </FloatingLabel>
    </>
  );
}

export default MyTextArea;
