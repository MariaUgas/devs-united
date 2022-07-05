import "./App.css";

function App() {
  let store = StoreClient("9601fad7-98f8-4539-8484-96ccd6c58bcb");
  console.log(store !== undefined);
  const getStore = () => {
    //setLoading(true);
    fetch(
      `https://store.zapier.com/api/records?secret=9601fad7-98f8-4539-8484-96ccd6c58bcb`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  getStore();
  return (
    <div className="App">
      <header className="App-header">GeoVictoria</header>
    </div>
  );
}

export default App;
