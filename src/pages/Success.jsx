import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useState } from "react";
function Success() {
  const navigate = useNavigate();
  const [confettiPieces, setConfettiPieces] = useState(150);

  //after 3 sec stop
  const stopTheConfetti = () => {
    setTimeout(() => {
      setConfettiPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopTheConfetti();
  }, []);
  return (
    <m.main
      className="flex h-screen items-center justify-center  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="font-regular m-4 rounded-lg bg-[#FFE7C5] text-center text-black lg:w-1/2">
        <h1 className="pb-4 text-3xl font-bold">Thanks for the subscription</h1>
        <p className="text-black-500 text-lg">
          We have sent an email over at lorem. We will get back to you as soon
          as we can!
        </p>
        <p className="text-black-500 text-lg">
          For your information your data is don't saved in any kind of database
          or server the contact form it's just Client Side.
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={confettiPieces} />
    </m.main>
  );
}

export default Success;
