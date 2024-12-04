import React from "react";

const FooterSection = () => {
  return (
    <div className="flex flex-col items-start w-full px-48 mt-12">       
      <div className="flex-1 text-left space-y-2">
        <h2 className="text-7xl font-semibold leading-tight">
          Transforming <br/> Imagination into <span className="text-purple-400">Reality</span>
        </h2>
        <p className="text-lg text-gray-300 leading-6 w-3/5">
          Unlock the full potential of your creativity with our AI-powered design assistant. Explore new dimensions of design, from futuristic visual to timeless craftsmanship, and witness how AI can turn your wildest ideas into stunning realities.
        </p>
      </div>

    {/*Row 1*/}
      <div className="flex flex-row items-center w-full h-auto mt-7 gap-5 ">
        {/* Feature 1 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 pl-3 pt-3 rounded-2xl shadow-lg h-80 w-2/5"
        style={{ backgroundColor: "#272829" }}>
            <div className="flex justify-between items-center">
                <p className="text-sm/[17px] pl-2 font-sans">Dive into the world of AI where design possibilities are limitless. Let the cutting-edge technology transform your concepts into breathtaking visuals.</p>            
                <img src="/icons/arrow.png" alt="Logo 1" className="w-16 h-16 object-contain mb-4 ml-2" />
                </div>
          <h3 className="text-3xl font-semibold pl-2 pt-40">Witness the Future</h3>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 pl-3 pt-3 rounded-2xl shadow-lg h-80 w-3/5"
        style={{ backgroundColor: "#272829" }}>
            <div className="flex justify-between items-center">
                <p className="text-sm/[17px] pl-2 font-sans">Step beyond the ordinary with designs that defy conventions. <br/> Out AI conjures up imaginative visuals that push the boundaries of creativity.</p>            
                <img src="/icons/arrow.png" alt="Logo 1" className="w-16 h-16 object-contain mb-4 ml-44" />
                </div>
          <h3 className="text-3xl font-semibold pl-2 pt-40">Visualize the Impossible</h3>
        </div>
        </div>

        {/*Row 2*/}
        <div className="flex flex-row items-center w-full h-auto mt-7 gap-5 ">
        {/* Feature 3 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 pl-3 pt-3 rounded-2xl shadow-lg h-80 w-3/5"
        style={{ backgroundColor: "#272829" }}>
            <div className="flex justify-between items-center">
                <p className="text-sm/[17px] pl-2 font-sans">Experience the perfect blend of form and function. Our AI ensures that every design not only looks stunning but also serves it purpose flawlessly.</p>            
                <img src="/icons/arrow.png" alt="Logo 1" className="w-16 h-16 object-contain mb-4 ml-44" />
                </div>
          <h3 className="text-3xl font-semibold pl-2 pt-40">Synergy and Style</h3>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col bg-gray-800 text-white p-6 pl-3 pt-3 rounded-2xl shadow-lg h-80 w-2/5"
        style={{ backgroundColor: "#272829" }}>
            <div className="flex justify-between items-center">
                <p className="text-sm/[17px] pl-2 font-sans">Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to tyour creative projects.</p>            
                <img src="/icons/arrow.png" alt="Logo 1" className="w-16 h-16 object-contain mb-4 ml-2" />
                </div>
          <h3 className="text-3xl font-semibold pl-2 pt-40">Timeless Precision</h3>
        </div>
        </div>
      </div>
  );
};

export default FooterSection;