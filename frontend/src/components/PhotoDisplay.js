import '../style/PhotoDisplay.css'

function PhotoDisplay(props)
{
    return(
        <div id="PhotoDisplay">
            <img src= {props.animalImg} alt ={props.alt}></img>
        </div>
    )
}

export default PhotoDisplay