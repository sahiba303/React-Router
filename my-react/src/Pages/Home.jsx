import Button from "../Components/Button/Button";

function Home() {
  return (
    <>
      <div className="flex justify-center flex-col h-screen items-center bg-red-400">
        <h1 className="text-4xl">Home Page</h1>
        <Button
          text="Click Me"
          textColor="text-white"
          bgColor="bg-red-500"
          hoverBgColor="bg-blue-600"
          onClick={() => alert("Button clicked")}
        />
      </div>
    </>
  );
}

export default Home;
