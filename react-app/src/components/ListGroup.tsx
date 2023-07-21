import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: String[];
  heading: String;
}

function ListGroup(props: ListGroupProps) {
  //   let items = ["San Francisco", "New York", "Chicago", "College Park"];
  const items: String[] = props.items;
  const heading = props.heading;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  const handleClick = (event: MouseEvent, index: number) => {
    console.log(event);
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p> No Items Found </p> : null} */}
      {items.length === 0 && <p> No Items Found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // each element should have a unique key
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => {
              handleClick(event, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  //   return (
  //     <>
  //       <h1>This is a List</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </>
  //   );
}

export default ListGroup;
