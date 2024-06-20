import { Button } from "@nextui-org/react";

const ConfirmationPopup = () => {
  return (
    <>
      <div className=" fixed  flex justify-center items-center top-0 left-0 w-full h-screen z-50 backdrop-blur bg-[#000000a7]">
        <div className=" w-[400px] h-[250px] bg-[#FFFFFF] rounded-[10px]">
          <div className=" flex justify-end items-center p-2 pr-5 gap-2">
            <Button className=" bg-[red] rounded-[5px]">Cancel</Button>
            <Button className="bg-[green] rounded-[5px]">Confirmation</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPopup;
