console.log("App.js is running");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option) 
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAllButton = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
            <p>{app.options.length}</p>
            <button onClick={removeAllButton}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
