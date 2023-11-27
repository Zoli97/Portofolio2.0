import { useEffect } from "react";

const Useoverflowhidden = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};

export default Useoverflowhidden;
