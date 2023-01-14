import React from 'react';
// import ReactDOM from 'react-dom/client'; <- This import is only for React version 18
import { render } from 'react-dom'; // <- This is the correct import statement for React version 17
import './index.css';
import App from './components/App';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools } from 'react-query/devtools'
// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root'); // <- This is t  he correct method call for React version 17
const client = new QueryClient()
render(
  <QueryClientProvider client = {client}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  root
);