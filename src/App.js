import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ErrorBoundary from './Components/Error'
//Styles
import "./index.css"

//Components
import Main from './Components/Main'
import Search from './Components/Search'

function App() {
  return (
    <ErrorBoundary >
      <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter >
    </ErrorBoundary>
  );
}

export default App;
