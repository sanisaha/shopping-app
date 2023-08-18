import './App.css';
import Button from 'react-bootstrap/Button'
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';



function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
      <Button variant='info' className='p-4 text-black fs-3 m-4'>Welcome to the Shopping App</Button>
      </RouterProvider>
    </div>
  );
}

export default App;
