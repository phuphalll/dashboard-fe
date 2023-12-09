interface DataItem {
  value: number;
  growth: string;
  gap: string;
  margin: string;
  dist: number;
  budget: string[];
}

interface YearData {
  year: string;
  data: DataItem[];
}

type YearlyData = YearData[];

export type { DataItem, YearData, YearlyData };
