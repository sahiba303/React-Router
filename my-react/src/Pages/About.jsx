import Details from "../Components/Navbar/Details/Details";
import Team from "../Components/Navbar/Team/Team";


function About(){
    return(
        <>
        <div className="flex flex-col justify-center h-screen bg-yellow-200">
        <h1 className="text-4xl">About Page</h1>
        <Team/>
        <Details/>
        </div>
        </>
    )
}

export default About;