   // Working with JSX Syntax
let zak = 'Zak Ruvalcaba'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tyres'
let glad = 'Gladys Allover'
const element = (
    <ul style={{'color': 'blue', 'fontSize': '24px'}}>
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{robin}</li>
      <li>{aaron}</li>
      <li>{glad}</li>
    </ul>
       )
ReactDOM.render(element, document.getElementById('content'))
   
   
   
   
   
   
   
   
   
   
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