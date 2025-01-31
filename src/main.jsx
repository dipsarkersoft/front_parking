import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AuthProvider } from './contex/useAuth.jsx';
import 'swiper/css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>,
)
