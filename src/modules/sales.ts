import { YearlyData } from "../interfaces/sales.interface";
import axiosServices from "./index";

const salesServices = {
  getSalesReport: async (
    startYear: string | null,
    endyear: string | null
  ): Promise<YearlyData> => {
    return await axiosServices
      .get(`/sales/search?startYear=${startYear}&endyear=${endyear}`)
      .then((res) => [
        {
          year: "2020",
          data: [
            {
              value: "14",
              growth: "+23.24%",
              gap: "+3.12%",
              margin: "13.21%",
              dist: "6",
              budget: ["4", "14%"],
            },
            {
              value: "8",
              growth: "+13.24%",
              gap: "+23.12%",
              margin: "8.21%",
              dist: "4",
              budget: ["2", "8%"],
            },
          ],
        },
        {
          year: "2021",
          data: [
            {
              value: "14",
              growth: "+23.24%",
              gap: "+3.12%",
              margin: "13.21%",
              dist: "6",
              budget: ["4", "14%"],
            },
            {
              value: "8",
              growth: "-13.24%",
              gap: "-23.12%",
              margin: "8.21%",
              dist: "4",
              budget: ["2", "8%"],
            },
          ],
        },
      ]);
    // res.data);
  },
};

export default salesServices;
