class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {


    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>



                    <button type='submit'>Submit!</button>
                </form>



            </div>
        );
    }
}