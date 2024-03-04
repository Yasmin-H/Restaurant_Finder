import logo from './logo.svg';
import './App.css';
import RestaurantContainer from './Containers/RestaurantContainer';
import RestaurantForm from './Components/RestaurantForm';

function App() {
  return (
    <div>
    <h1>JustEat Restaurant Finder</h1>
    <p><em>Find any restaurant in your local area !</em></p>
    <RestaurantContainer />
    </div>
  );
}

export default App;
