
    // const heading=React.createElement(
    //     'h1',
    //     {id: 'h1' },
    //     'Hello World using React!'
    // );
    // const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading);
//     import React from 'react';
//     import ReactDOM from 'react-dom/client';
// const parent=React.createElement("div",{id:"parent"},
//    [ React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{id:"h1"},"Hello World using react !",
//         React.createElement("h2",{id:"h2"},"This is my first react app")), 
//         React.createElement("h2",{id:"h2"},"This is a heading inside parent"),
//         ]),
//         React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{id:"h1"},"Hello World using react !",
//         React.createElement("h2",{id:"h2"},"This is a heading inside child2")), 
//         React.createElement("h2",{id:"h2"},"This is a heading inside parent"),
//         ]),
//     ]);
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(parent);


//React Element-this is how we create react element using core react library
//  const heading=React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World using React !"
// );

//JSX Element-this is how we create react element using JSX
//JSX(transpiled before it reached the js engine)
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Title= ()=>{
//  return (

//         <div>
//             <h1>
//                 Hello World using React!
//             </h1>
//             </div>
//     )
// }
// const Heading= () => (
//     <>
//     <Title></Title>
//     {Title()}
//     <h2>{"My name is Ali Ahmad"}</h2>
// <h1 id= "heading" > Hello World using JSX ! </h1>
// </>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render( <Heading/>)
// // JSX=>React.createElement=>React Element-JS Object =>HTML Element(rendered in browser) 
// const jsxheading=<h1 id='heading'>React using JSX</h1>
// // console.log(jsxheading); 

// //  const root=ReactDOM.createRoot(document.getElementById("root"));
// //  root.render(jsxheading);

import React from 'react';
import ReactDOM from 'react-dom/client';

const Logo = ()=> (
    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
);
const searchBar =()=>(
    <div className="search-bar">
    <input type="text" placeholder='Search..' id="search-bar" />
    <button id="search-button">Search
    </button>
</div>
);

const userIcon = ()=>(
    <img id="user-icon" src="/image.png" alt="User Icon"/>

);
const Header = () => (
    <div className="title">
        <Logo />
        {searchBar()}
        {userIcon()}
    </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);