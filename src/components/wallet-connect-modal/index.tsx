import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogContent,
} from "../ui/dialog";
import Image from "next/image";


interface Wallet {
  name: string;
  img: string;
}
const walletarray:Wallet[] = [
  {
    name: "pera wallet",
    img: "/assets/pera.svg",
  },
  {
    name: "defly",
    img: "/assets/defly.svg",
  },
  {
    name: "exodus",
    img: "/assets/exodus.svg",
  },
  {
    name: "kibisis",
    img: "/assets/kibisi.svg",
  },
];

const ConnectWalletModal = () => {
  return (
    <DialogContent className="sm:max-w-[425px] h-[486px] bg-[#ECECEC] p-16 flex flex-col rounded-4xl  ">
      <DialogTitle >
        <div>
          <h2 className="text-[32px] font-bold mb-2">Connect a Wallet</h2>
          <h2 className="text-[22px] text-[#717071] font-normal mb-3">
            Supported wallets
          </h2>
        </div>
      </DialogTitle>
      <DialogDescription className=" flex-1 flex flex-col gap-4">
          {walletarray.map((wallet, idx) => (
            <span
              key={idx}
              className="flex items-center justify-between px-4 py-1  cursor-pointer "
            >
              <span className="flex items-center gap-4">
                <Image
                  src={wallet.img}
                  alt={wallet.name}
                  className="object-cover"
                  width={50}
                  height={50}
                />
                <span className="text-lg  capitalize md:text-[24px] font-bold text-[#161616] ">
                  {wallet.name}
                </span>
              </span>
            </span>
          ))}
      </DialogDescription>
    </DialogContent>
  );
};

export default ConnectWalletModal;
