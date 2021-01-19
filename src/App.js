import './App.css';
import Header from './components/header';
import Location from './components/location';
import Host from './components/Host';
import Rooms from './components/Rooms';
import Activity from './components/Activity';
function App() {
  return (
    <div className="App">
        <Header />
        <Location />
        <Rooms />
        <Activity />
        <Host />
    </div>
  );
}

export default App;
