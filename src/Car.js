function Car() {
  return (
    <>
      <h1>React element</h1>
    </>

  )
}

function CarWithProps(props) {
  return <h1>React element with props: {props.color} type {props.type}.</h1>
}

function CarWithName(props) {
  return <li>Car: {props.name} with number: {props.number}.</li>
}

export {CarWithProps, CarWithName};
export default Car;
