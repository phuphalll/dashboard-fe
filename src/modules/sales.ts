import { YearlyData } from "../interfaces/sales.interface";
import axiosServices from "./index";

const salesServices = {
  getSalesReport: async (
    startYear: string | null,
    endyear: string | null
  ): Promise<YearlyData> => {
    return await axiosServices
      .get(`/sales/search?startYear=${startYear}&endyear=${endyear}`)
      .then((res) => res.data);
  },
};

export default salesServices;
