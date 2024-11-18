import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// const reactElement = {
//   type : 'a',
//   props: {
//       href: 'https://google.com',
//       targert: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
function MyApp(){
  return (
    <div>
      <h1>Custom App | First</h1>
    </div>
  )
}

const anotherOne = 'Bankai'
const reactElement = React.createElement(
  'a',
  {href:"https://google.com" , target: '_blank'},
  'Click for Google',
  anotherOne
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
