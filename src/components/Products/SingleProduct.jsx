import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>SingleProduct</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default SingleProduct;
