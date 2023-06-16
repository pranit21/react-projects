// Function based component
function Hello() {
    // JSX - JavaScript XML
    return <h2>Hello React!</h2>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);