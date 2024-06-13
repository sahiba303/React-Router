import Button from "../Components/Button/Button";

function Services(){


    return(
        <>
        <div className="flex justify-center h-screen flex-col gap-5 items-center bg-orange-300">
        <h1 className="text-4xl"> Services Page</h1>

        <Button
          text="Click"
          textColor="text-black"
          bgColor="bg-blue-500"
          hoverBgColor="bg-blue-600"
          onClick={() => alert("Clicked")}
        />
        </div>
        </>
    )
}

export default Services;