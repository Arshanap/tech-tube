import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginScreen from './screens/user/LoginScreen.jsx'
import SignUpScreen from './screens/user/SignupScreen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignUpScreen />
    <LoginScreen />
  </StrictMode>,
)
