import Home from './pages/home/Home'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Routes>
    <Route path='/'>
      <Route index element={<Home />} />
    </Route>
   </Routes>
  );
}

export default App;
