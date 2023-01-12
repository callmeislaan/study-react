import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Car';
import { CarWithProps, CarWithName } from './Car';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

import DemoUseState from './HookUseState';
import { DemoUseStateWithObject } from './HookUseState';
import HookUseEffect from './HookUseEffect';

// first react 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react render html
const react_can_render = ReactDOM.createRoot(document.getElementById('react-render-html'));
const myElement = (
  <>
    <h1>React can render html element</h1>
    <p>Like this</p>
  </>
)
react_can_render.render(myElement);

// react jsx
const jsxValue = <h1>React with JSX</h1>
const reactWithJsx = ReactDOM.createRoot(document.getElementById('react-jsx'));
reactWithJsx.render(jsxValue);

// react without jsx
const jsxWithValue = <h1>React with jsx and value: 1 + 1 = {1 + 1}</h1>
const reactWithJsxValue = ReactDOM.createRoot(document.getElementById('react-jsx-value'));
reactWithJsxValue.render(jsxWithValue);

// react component
const reactComponent = ReactDOM.createRoot(document.getElementById('react-component'));
reactComponent.render(<Car />);

// react component: cart with props
const reactComponentCarWithProps = ReactDOM.createRoot(document.getElementById('react-component-car-with-props'));
reactComponentCarWithProps.render(< CarWithProps color="red" type="abc" />);

// react event
const reactEvent = ReactDOM.createRoot(document.getElementById('react-event'));
function Football() {
  return <button onClick={(event) => Shot(event)}>Take a shot</button>;
}
function Shot(event) {
  alert(event.type);
}
reactEvent.render(<Football />);

// react list
const reactList = ReactDOM.createRoot(document.getElementById('react-list'));
function Garage() {
  const cars = [
    { id: 1, name: "Ford", number: 10 },
    { id: 2, name: "Honda", number: 20 },
    { id: 3, name: "VinFast", number: 30 },
  ]

  return (
    <>
      <h1>React list</h1>
      <ul>
        {cars.map((car) => <CarWithName key={car.id} name={car.name} number={car.number} />)}
      </ul>
    </>
  );
}
reactList.render(<Garage />);

// rounter
const rounter = ReactDOM.createRoot(document.getElementById('router'));
export default function AppRounter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="contact" element={<Contact />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
rounter.render(<AppRounter />);

// Hooks
// useState
const demoUseStateHook = ReactDOM.createRoot(document.getElementById("demo-use-state-hook"));
demoUseStateHook.render(<DemoUseState/>);

// use state with object
const demoUseStateHookWithObject = ReactDOM.createRoot(document.getElementById("demo-user-state-hook-with-object"));
demoUseStateHook.render(<DemoUseStateWithObject/>);

// react effect hook
const reactEffectHook = ReactDOM.createRoot(document.getElementById("react-effect"));
reactEffectHook.render(<HookUseEffect/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
