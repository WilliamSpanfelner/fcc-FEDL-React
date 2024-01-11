class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return <h1></h1>;

    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {

            return {
                counter: prevState
            }
        });
    }
    render() {
        const expression = null;
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>



                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}