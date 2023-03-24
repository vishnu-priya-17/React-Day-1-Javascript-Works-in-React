console.log("Message to developer")
function AlertMsg()
{
    const Hi =()=>{alert("Message from Javascript Alert!")}
    return <div>
    <h1>Let we see the output of JAVASCRIPT</h1>
    <button onClick={Hi}>Click</button></div>
}
ReactDOM.render(<AlertMsg/>,document.getElementById("mydiv"))