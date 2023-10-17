import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css';

function App() {

  const router = useRoutes(routes)

  return (
    <div>
      { router }
    </div>
  );
}

export default App;
