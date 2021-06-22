

function ComponentB(props){
    return (
        <div>
            This is Component B
            <button onClick={props.eventHandler}>Click Me</button>
        </div>
    )
}
export default ComponentB;