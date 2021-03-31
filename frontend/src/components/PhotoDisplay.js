import '../style/PhotoDisplay.css'

function PhotoDisplay(props)
{
    return(
        <div className="PhotoDisplay">
            <img src= {props.imgURL} alt = "Shelter Animal Photo"></img>
        </div>
    )
}