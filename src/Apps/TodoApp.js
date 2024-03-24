import React from "react";
import TodoList from "../components/TodoList";

// const List = () => {
//   let items = TodoList.map((item) => {
//     console.log(item.id);
//     return (
//       <div key={item.id}>
//         <div className="card">
//           <p>{item.id}</p>
//           <div className="card-title">{item.title}</div>
//           <div className="card-desc">{item.desc}</div>
//         </div>
//         <br />
//       </div>
//     );
//   });

//   //items = [];

//   console.log(items);
//   return (
//     <div>
//       <h1 className="headingStyle">TODO List</h1>
//       {items.length === 0 ? "No Items" : items}
//     </div>
//   );
// };

const List = () => {
  let items = [...TodoList];

  //items = [];
  console.log(items);
  return (
    <div>
      {items.length === 0 ? (
        <h1 className="headingStyle">Item not found</h1>
      ) : (
        items.map((item) => {
          return (
            <div key={item.id} onClick={() => console.log("Clicked!!!!")}>
              <div className="card">
                <p>{item.id}</p>
                <div className="card-title">{item.title}</div>
                <div className="card-desc">{item.desc}</div>
              </div>
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export default List;
