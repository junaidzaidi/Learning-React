import ListGroup from "./components/ListGroup";

function App() {
  let items = ["San Francisco", "New York", "Chicago", "College Park"];
  items = ["Maryland", "Illinois", "Washington DC", "California"];
  return (
    <div>
      <ListGroup items={items} heading="States" />
    </div>
  );
}

export default App;
