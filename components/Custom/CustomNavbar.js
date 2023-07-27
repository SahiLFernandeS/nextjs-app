// "use client";
import Image from "next/image";

export const CustomNavbar = () => {
  return (
    <div className="custom-nav">
      <div className="nav-item">
        <Image src={"/netflix-logo.png"} width={"150"} height={"80"} />
      </div>
      <div className="nav-item">
        <div className="nav-item-ele">
          <select name="language" id="language">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <div className="nav-item-ele">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};
