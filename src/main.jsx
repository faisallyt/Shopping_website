
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "./redux/Store"
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    
      <Provider store={store}>
            <App />
            <Toaster></Toaster>
        </Provider>
  
      
  </Router>
  
)
