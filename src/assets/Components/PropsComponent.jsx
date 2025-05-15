function UserName(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function PropsName() {
  return (
    <div>
      <UserName name="Alice" />
    </div>
  );
}

export default PropsName