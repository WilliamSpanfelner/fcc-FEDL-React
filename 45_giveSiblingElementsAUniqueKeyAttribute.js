const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(framework => <li key={Math.random()}>{framework}</li>);
    return (
        <div>
            <h1>Popular Front End Javascript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
        </div>
    );
}