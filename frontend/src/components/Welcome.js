import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import welcomepng from "../icons/welcomepng.png";

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/SignIn");
    }
  }, [user, navigate]);

  return (
    <div>
      {" "}
      <img src={welcomepng} alt="fire" />
    </div>
  );
};

export default Welcome;
