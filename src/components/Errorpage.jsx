import React from "react";

function Errorpage() {
    return (
        <div className="w-screen h-screen relative">
            <img className=" mt-[40%] md:mt-[10%] ml-[26%] absolute h-[20%] md:h-[50%] w-[25%] " src="./src/assets/error2.png" alt="" />
            <img className="mt-[40%] md:mt-[10%] ml-[38%] absolute h-[20%] md:h-[50%] w-[25%]" src="./src/assets/error3.png" alt="" />            
            <img className="mt-[40%] md:mt-[10%] ml-[50%] absolute h-[20%] md:h-[50%] w-[25%]" src="./src/assets/error2.png" alt="" />
            <img className="h-full w-full object-cover" src="./src/assets/error1.jpg" alt="error" />
            
            
        </div>
    );
}

export default Errorpage;