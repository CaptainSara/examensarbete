import {Routes, Route} from 'react-router-dom'

//Import Pages
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';

//Import Design
import "./sass/main.scss"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/announcements/:id' element={<NewsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
