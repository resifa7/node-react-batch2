function ThingsToDo(props) {
  return (
    <div className="checkbox">
      <input type="checkbox" id="todo" name="todo" value={props.name} />
      <label htmlFor="todo">{props.name}</label>
    </div>
  );
}

export default ThingsToDo;
