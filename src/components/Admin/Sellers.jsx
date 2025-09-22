import { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";
import Loader from "../Common/Loader";

const Sellers = () => {
  const [name, setName] = useState("");
  const [sellers, setSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchSellers();
    // setIsLoading(true);
    // apiClient
    //   .get("/users")
    //   .then((res) => {
    //     setSellers(res.data);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     setError(err.message);
    //   });
  }, []);

  const fetchSellers = async () => {
    try {
      setIsLoading(true);
      const res = await apiClient.get("/users");
      setSellers(res.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
  const addSeller = async () => {
    const newSeller = {
      name,
      id: sellers.length + 1,
    };
    setSellers([newSeller, ...sellers]);
    try {
      const res = await apiClient.post("/users", newSeller);
      setSellers([res.data, ...sellers]);
    } catch (err) {
      setError(err.message);
      setSellers(sellers);
    }
  };
  const deleteSeller = async (id) => {
    try {
      setSellers(sellers.filter((seller) => seller.id !== id));
      await apiClient.delete(`/users/${id}`);
    } catch (err) {
      setError(err.message);
      setSellers(sellers);
    }
  };
  const updateSeller = async (seller) => {
    const updatedSeller = { ...seller, name: `${seller.name} Updated` };

    setSellers(sellers.map((s) => (s.id === seller.id ? updatedSeller : s)));

    try {
      await apiClient.patch(`/users/${seller.id}`, updatedSeller);
    } catch (err) {
      setError(err.message);
      setSellers(sellers);
    }
  };
  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addSeller}>Add Seller</button>

      {isLoading && <Loader />}
      {error && <em>{error}</em>}

      <table>
        <tbody>
          {sellers.map((seller) => (
            <tr key={seller.id}>
              <td>{seller.name}</td>
              <td>
                <button onClick={() => deleteSeller(seller.id)}>Delete</button>
              </td>
              <td>
                <button onClick={() => updateSeller(seller)}>
                  Update Seller
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Sellers;
