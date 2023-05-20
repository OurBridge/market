import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/swiper-bundle.css";
import './index.css';
import App from './app/App';
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
    <App />
    </RecoilRoot>
);