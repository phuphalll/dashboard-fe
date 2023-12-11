import { useQuery } from "@tanstack/react-query";
import salesServices from "../modules/sales";

interface IUseGetSales {
  startDate: string;
  endDate: string;
}

function useGetSales({ startDate, endDate }: IUseGetSales) {
  return useQuery({
    staleTime: 60000,
    retry: 3,
    queryKey: ["fetchSales", startDate, endDate],
    queryFn: async () => {
      return await salesServices.getSalesReport(startDate, endDate);
    },
  });
}
export { useGetSales };
