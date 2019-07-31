var app = {
  title: "Life in hands of computer",
  options: ["Item 1", "Item 2"]
};

var appRoot = document.getElementById("app");

const getOptions = () => {};

const removeAll = () => {
  app.options = [];
  RenderTemplate();
};

const addOptions = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    RenderTemplate();
  }
};

const randomOption = () => {
  const randumNumber = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randumNumber];
  alert(selectedOption);
};

const RenderTemplate = () => {
  const template = (
    <div>
      <button onClick={removeAll}>Remove All</button>
      <button onClick={randomOption} disabled={app.options.length == 0}>
        What Should I Do?
      </button>
      <p>{app.title}</p>
      <p>Option Count : {app.options.length}</p>
      <ul>
        {app.options.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <form onSubmit={addOptions}>
        <input type="text" name="option" />
        <button>Add Options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

RenderTemplate();
