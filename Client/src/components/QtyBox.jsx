import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
const QtyBox = () => {

    const [qty, setQty] = useState(1);

    const increaseQty = () => {
        setQty(qty + 1);
    }
    const decreaseQty = () => {
        if (qty === 1) {
            setQty(1)
        }
        else {
            setQty(qty - 1)
        }
    }
    return (
        <div className="qtyBox flex items-center gap-2 relative">
            <input
                type="number"
                className="w-full h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
                value={qty}

            />

            <div className="flex items-center flex-col gap-2 absolute top-0 right-0 z-50 border-[1px] border-[rgba(0,0,0,0.1)]">
                <Button onClick={increaseQty} className="!min-w-8 !h-[16px] !rounded-none !text-black" >
                    <FaAngleUp className="" />
                </Button>
                <Button onClick={decreaseQty} className="!min-w-8 !h-[16px] !rounded-none !text-black">
                    <FaAngleDown className="" />
                </Button>
            </div>
        </div>
    );
}

export default QtyBox;
