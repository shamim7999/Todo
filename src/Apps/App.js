import React from "react";
import Card from "../components/Card";
import Data from "../jsons/data.json";
import Child from "../components/STATE_LIFTING/Child";

const App = () => {

  const data = "I am from Parent";
  const handleChildData = (childData) => {
    console.log(childData);
  }


  let items = Data.map((item, index) => {
    return (
      <span key={index}>
        <Card titleText={item.title} descText={item.desc} />
        <br />
      </span>
    );
  });

  return (
    <div>
        <div>
          <h1 className="headingStyle">TODO APP</h1>
          {items}
        </div>
        <div>
            <h1 className="headingStyle">Example</h1>
            <Child data={data} onChildData={handleChildData} />
        </div>
    </div>
  );
};

export default App;
