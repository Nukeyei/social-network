import 'antd/dist/reset.css'
import './App.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter } from 'react-router-dom';
import BaseRouter from './routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
