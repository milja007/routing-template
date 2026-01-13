import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/api-client";

const fetchSellers = () => apiClient.get("/users").then((res) => res.data);

const useSellers = () => {
  return useQuery({
    queryKey: ["sellers"],
    queryFn: fetchSellers,
    //ovdje je za individual querys npr
    retry: 5,
  });
};

export default useSellers;
