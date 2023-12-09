import { useQuery } from "@tanstack/react-query";
import salesServices from "../modules/sales";

function useGetSales() {
  return useQuery({
    staleTime: 60000,
    retry: 3,
    queryKey: ["fetchSales"],
    queryFn: async () => {
      return await salesServices.getSalesReport(null, null);
    },
  });
}
export { useGetSales };
