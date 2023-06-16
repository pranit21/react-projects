// Function based component
function Hello() {
    // JSX - JavaScript XML
    return React.createElement(
        'h2',
        null,
        'Hello React!'
    );
}

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(Hello, null));