import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllCourses from './Components/AllCourses';
import FullStackDevelopment from './Components/FullStackDevelopment';
import DataScience from './Components/DataScience';
import CyberSecurity from './Components/CyberSecurity';
import Career from './Components/Career';
import Layout from './Components/Layout'; 

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <hr/>
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/full_stack_development" element={<FullStackDevelopment />} />
          <Route path="/data_science" element={<DataScience />} />
          <Route path="/cyber_security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<h1>Please Check URL</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
