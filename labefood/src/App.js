import Router from '../src/routes/Router';
import { GlobalStyles } from './GlobalStyles'
import { GlobalState } from './context/GlobalState';


function App() {
  return (
    <div>
      <GlobalStyles />
      <GlobalState>
        <Router />
      </GlobalState>

    </div>
  );
}

export default App;
