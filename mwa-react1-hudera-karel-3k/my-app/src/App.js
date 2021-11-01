import './App.css';
import './comp/Header.css';
import Header from './comp/Header.js';
import './comp/Item.css';
import Item from './comp/Item.js';
import './comp/Item.css';
import './comp/Footer.css';
import Footer from './comp/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
        <ul class="items">
          <li> <Item /> </li>
          <li> <Item /> </li>
          <li> <Item /> </li>
          <li> <Item /> </li>
          <li> <Item /> </li>
          <li> <Item /> </li>
        </ul>
      <Footer />
    </div>
  );
}

export default App;
