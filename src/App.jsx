import "./App.css";
import { ProductListItem } from "./components/ProductLisItem/ProductListItem.jsx";

function App() {
  const name = "playa";
  const price = "5";
  return (
    <>
      <ProductListItem
        name={name}
        price={price}
        imageUrl='https://unsplash.it/600/400?image=501'
      />
    </>
  );
}

export default App;
