const List = (props) => {
    return <p>{}</p>
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                <List />
                <h2>Tomorrow</h2>
                <List />
                
            </div>
        )
    }
}