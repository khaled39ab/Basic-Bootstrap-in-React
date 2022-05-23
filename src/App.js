import './App.css';
import Basic from './components/Basic/Basic';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="App">
      <h1 className='bg-info p-3'>Welcome to React-Bootstrap</h1>
      <div className='border border-3 border-primary m-4 p-4'>
        <h3>Css with linked bootstrap</h3>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>

        <button type="button" className="btn btn-link">Link</button>
      </div>
      <Basic></Basic>
      <Cards></Cards>
    </div>
  );
}

export default App;
