import './App.css';
import { sampleProducts } from './types/data';

function App() {
  return (
    <div>
      <header>Amazon excommerce</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug} >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>$ {product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>All rights for Ramzy</footer>
    </div>
  );
}

export default App;
