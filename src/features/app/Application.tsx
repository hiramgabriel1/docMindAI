import { Flex } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import CustomButton from "./components/Button";

function Application() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-4xl font-bold">New Conversation</h1>
        <p>Start by uploading a new pdf or dragging it</p>
        <div className="flex space-x-4">
          <Flex align="center" gap="3">
            <CustomButton text="Start chat" buttonSize='py-3' borderSize="rounded-md"/>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Application;
