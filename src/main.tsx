import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider as ReduxProvider} from "react-redux";
import {setupStore} from "./store/store.ts";

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ReduxProvider store={store}>
          <App />
      </ReduxProvider>
  </React.StrictMode>,
)
