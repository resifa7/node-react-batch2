function Welcome(props) {
  return (
    <div className="card">
      <h1 style={{ color: props.color }}>Hello, {props.name}</h1>
    </div>
  );
}

export default Welcome;
