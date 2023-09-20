import MyComponent from './components/Todo';
import Header from'./components/Header'
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyComponent/>
      <Footer/>
    </div>
  );
}

export default App;
