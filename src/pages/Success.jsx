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
      className="h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center bg-white rounded-lg font-regular w-1/2 text-black">
        <h1 className="text-3xl pb-4 font-bold">Thanks for the Email</h1>
        <p className="text-lg text-gray-500">
          We have sent an email over at lorem. We will get back to you as soon
          as we can!
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={confettiPieces} />
    </m.main>
  );
}

export default Success;
