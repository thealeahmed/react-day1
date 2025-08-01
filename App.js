
    // const heading=React.createElement(
    //     'h1',
    //     {id: 'h1' },
    //     'Hello World using React!'
    // );
    // const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading);
    import React from 'react';
    import ReactDOM from 'react-dom/client';
const parent=React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"h1"},"Hello World using react !",
        React.createElement("h2",{id:"h2"},"This is my first react app")), 
        React.createElement("h2",{id:"h2"},"This is a heading inside parent"),
        ]),
        React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"h1"},"Hello World using react !",
        React.createElement("h2",{id:"h2"},"This is a heading inside child2")), 
        React.createElement("h2",{id:"h2"},"This is a heading inside parent"),
        ]),
    ]);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
