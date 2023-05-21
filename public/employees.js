// Working with JSX Syntax
let zak = 'Zak Ruvalcaba';
let sally = 'Sally Smith';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let aaron = 'Aaron D. Tyres';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron));
ReactDOM.render(element, document.getElementById('content'));

// Refactoring elements using JSX L6 - refactored
//     const element = (
//         <ul style={{'color': 'blue', 'fontSize': '24px'}}>
//             <li>Zak Ruvalcaba</li>
//             <li>Sally Smith</li>
//             <li>Holly Unlikely</li>
//         </ul>
//     )
//  ReactDOM.render(element, document.getElementById('content'))
// not refactored
//   const element = React.createElement(
//         'ul', 
//         {style: {'color': 'blue', 'font-size': '24px'}}, 
//         React.createElement('li', null, 'Zak Ruvalcaba'),
//         React.createElement('li', null, 'Sally Smith'),
//         React.createElement('li', null, 'Holly Unlikely')
//     )
//  ReactDOM.render(element, document.getElementById('content'))

// nested element L5
// const element = React.createElement(
//         'div', 
//         {title: 'Outer div'}, 
//         React.createElement('h1', null, 'Hello World')
//     )
//  ReactDOM.render(element, document.getElementById('content'))

// const element = React.createElement(
//         'div', 
//         {title: 'Outer div'}, 
//         'Hello World Again'
//     )
//  ReactDOM.render(element, document.getElementById('content'))   

// L4
// ReactDOM.render(
//     React.createElement(
//         'div', 
//         {title: 'Outer div'}, 
//         'Hello World!'
//     ),
//     document.getElementById('content')
// )