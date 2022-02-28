import './App.css';
import MyPosts from './components/blog/my-blog';
import MyProjects from './components/projects/my-projects';
import NavBarComponent from './components/nav/nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  const count = 34;
  return (
    <BrowserRouter>
    <div className="App container">
        {/* <NavBarComponent /> */}
          {/* <Routes>
              <Route path="projects" element={} />
              <Route path="blog" element={} />
          </Routes> */}
          <MyProjects />
          <MyPosts />
    </div>
    </BrowserRouter>
  );
}

export default App;
