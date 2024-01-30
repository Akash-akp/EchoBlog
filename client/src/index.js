import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast'
import { store , persistor } from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeChanger from './Components/ThemeChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PersistGate persistor={persistor} >
    <Provider store={store}>
      <ThemeChanger>
        <App />
        <Toaster />
      </ThemeChanger>
    </Provider>
  </PersistGate>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
