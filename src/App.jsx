import { Button } from "@/components/ui/button";
import Greeting from "./Greeting";
import { Switch } from "@/components/ui/switch"


const App = () => {
  const name = "Manupa";
  const age = 24;

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1 className="text-red-500 text-2xl">Hello, world!</h1>
      <Greeting name={"Manupa"} age={24} />
      <Button onClick={handleClick}>Click Me</Button>
      <Switch />
    </div>
  );
};

export default App;
