interface DataItem {
  value: string;
  growth: string;
  gap: string;
  margin: string;
  dist: string;
  budget: string[];
}

interface YearData {
  year: string;
  data: DataItem[];
}

type YearlyData = YearData[];

export type { DataItem, YearData, YearlyData };
