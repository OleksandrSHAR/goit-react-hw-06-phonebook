import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </React.StrictMode>
  </Provider>
);
