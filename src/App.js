// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

// module.exports = app;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/navbar.js';
// import About from './components/About/about.js';
import Welcome from './components/Welcome/welcome.js';
import { useState } from 'react';


export default function App(props) {

  // useEffect(() => {
  //   setCart(JSON.parse(window.localStorage.getItem('cart')));
  // }, []);

  // const addToCart = (item) => {
  //   // Add to cart
  //   if (cart.filter(e => e.name === item).length > 0) {
  //     // if item already in cart, add amount to the item
  //     cart.map(cartItem => {
  //       if (cartItem.name === item) {
  //         cartItem.amount += 1;
  //       }
  //     })
  //   } else {
  //     setCart((cart) => [
  //       ...cart,
  //       { name: item, amount: 1 } // <-- initial amount 1
  //     ]); 
  //   }
  // };
  
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart]);

  // const queryString = window.location.search;
  // const urlParams = new URLSearchParams(queryString);
  // const queryFilter = {
  //   query: urlParams.get('query'),
  //   filter: urlParams.get('filter'),
  //   supplier: urlParams.get('supplier'),
  //   range: urlParams.get('range')
  // }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/" render={() => <Navigate to="/Home"/>} />
        </Routes>
      </Router>
      
    </div>
  );
}