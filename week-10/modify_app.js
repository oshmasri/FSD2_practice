import React from "react";

function App(){
    return (
        <div>
            <h2>HTML rendering in react</h2>
            {/*HTML rendered using JSX */}
            <div>
                <h3 style={{color: "blue"}}>Welcome to react</h3>
                <p>This HTML content is rendered using JSX.</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    );
}

export default App;