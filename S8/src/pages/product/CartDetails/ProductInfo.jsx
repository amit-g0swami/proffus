import React from "react";

const CartDetails = ({product}) => {
  return (
    <div className="flex flex-1 pt-5 font-worksans items-start mt-20 flex-col w-3/4 h-32">
      <div className="flex font-bold text-lg">
        {" "}
        Purus habitant lectus maecena
      </div>
      <div className="flex flex-1 pt-3 flex-col">
        <div className="flex">
          <img src={require("../../../assets/hours.png")} alt="construction" />
          <p className="font-bold pl-3">2-3 hours</p>
        </div>
        <div className="flex flex-1 pt-3">
          {" "}
          <img
            className="h-5"
            src={require("../../../assets/strength.png")}
            alt="construction"
          />
          <p className="font-bold pl-3">1-2 Strength</p>
        </div>
        <div className="flex flex-1 border-b border-black pt-7 w-4/5 lg:pb-8">
          <p>{product}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
