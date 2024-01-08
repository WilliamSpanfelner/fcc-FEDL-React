class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>

                <Navbar />
            
            </div>
        );
    }
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>

                <h1>Hello, my name is: </h1>
            
            </div>
        );
    }
};