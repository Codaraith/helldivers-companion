import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import App from './app/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBC6l9uIsvp2zseT2opujTY6NhllMW0m6k',
  authDomain: 'helldivers-companion-bbb60.firebaseapp.com',
  projectId: 'helldivers-companion-bbb60',
  storageBucket: 'helldivers-companion-bbb60.appspot.com',
  messagingSenderId: '640155427510',
  appId: '1:640155427510:web:9ccc708ba63bedaf953c17',
  measurementId: 'G-C649PM46DG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
