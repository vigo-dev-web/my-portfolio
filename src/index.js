import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './app/App'
import './index.scss'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route
          path='/*'
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
)