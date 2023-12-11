import { TYearlyData } from "../interfaces/sales.interface";
import axiosServices from "./index";

const salesServices = {
  getSalesReport: async (
    startYear: string | null,
    endyear: string | null
  ): Promise<TYearlyData> => {
    return await axiosServices
      .get(`/sales?startDate=${startYear}&endDate=${endyear}`)
      .then((res) => res.data);
    // res.data);
  },
};

export default salesServices;
