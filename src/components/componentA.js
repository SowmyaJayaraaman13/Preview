function ComponentA(props) {
    return (
        <div>
            This is Component A
            My Value is <p>{props.data}</p>
            <style jsx>{`
            p{
                color: green;
            }
            `
            }
            </style>
        </div>
    )
}
export default ComponentA;
