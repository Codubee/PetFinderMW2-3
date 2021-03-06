import '../style/Explanation.css'
// This is where the explanation component will be created
function Explanation(props)
{
    return(
    <div className="jumbotron">
     <div className="container">
        <h1 className="header">Pet Finder</h1>
        <h2 className="lead">Looking for a new pet? Then this is the spot for you! Hit the Yes button to match with
        a pet you like, and No to skip the pet. Once you've matched with some pets you can check out a list of 
        your potential furry friends to find some adoption info.</h2>
    </div>
    </div>
    )
}

export default Explanation