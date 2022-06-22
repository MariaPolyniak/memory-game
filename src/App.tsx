import './App.css';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

function App() {
  return (
    <div className="App">
        <Header/>
        <Grid optionPairsCount={18}/>
    </div>
  );
}

export default App;
