import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route index path='calculator' element={<Calculator/>}></Route>
          <Route index path='contact' element={<Contacts/>}></Route>
          <Route index path='*' element={<NoPage/>}></Route>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//root.render(text)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
