import MyComponent from './components/Todo';
import Header from'./components/Header'
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>To-do List</h1>
      <MyComponent/>
      <Footer/>
   </div>
  );
}

export default App;
