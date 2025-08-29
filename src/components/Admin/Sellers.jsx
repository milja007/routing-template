import { useEffect, useState } from "react";

const Sellers = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Sellers mount");
    return () => {
      console.log("Sellers Unmount");
    };
  }, [name]);
  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};

export default Sellers;
