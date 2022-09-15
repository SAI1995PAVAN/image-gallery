import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// <Carousel interval={10000}>
// {data.map((image) => {
//   return (
//     <Carousel.Item key={image.id}>
//       <img
//         src={image.largeImageURL}
//         alt={image.tags}
//         width="1200px"
//         height="800px"
//       />
//     </Carousel.Item>
//   );
// })}
// </Carousel>