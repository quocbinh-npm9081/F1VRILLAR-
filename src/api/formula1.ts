import axiosClient from "./axiosClient";

export const years: { [key: string]: string } = {
  2010: "2010",
  2011: "2011",
  2013: "2013",
  2014: "2014",
  2015: "2015",
};
export const rounds: { [key: string]: string } = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
};
const bmdbApi = {
  getDrivers: (type: any, params: any) => {
    const url = "drivers";
    return axiosClient.get(url);
  },
  getDriversByYears: (year: string, params?: any) => {
    const url = years[year] + "drivers/";
    return axiosClient.get(url, params);
  },
  getDriverInfo: (type: string, id: any) => {
    const url = "drivers/" + id;
    return axiosClient.get(url);
  },
  getRaceResult: (year: string, round: string) => {
    const url = years[year] + "/" + rounds[round] + "/results";
    return axiosClient.get(url);
  },
  getRecentRaceResult: () => {
    const url = "current/last/results";
    return axiosClient.get(url);
  },
};
export default bmdbApi;