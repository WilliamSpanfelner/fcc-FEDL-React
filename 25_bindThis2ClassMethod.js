class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
    }
    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }
    render() {
        return(
            <div>
                <button>Click Me</button>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};