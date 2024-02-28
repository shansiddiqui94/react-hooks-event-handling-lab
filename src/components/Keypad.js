// Code Keypad Component Here

function Keypad (){
    function handleChange(event){
        console.log(`${event.target.value} Entering password... `)
    }
    return (
        <div>
            <input type="password" onChange={handleChange}/>
        </div>
    )
}

export default Keypad;