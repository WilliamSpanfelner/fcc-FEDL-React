class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }
    


    render() {
        return (
            <div>



                <h4>ControlledInput:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
};