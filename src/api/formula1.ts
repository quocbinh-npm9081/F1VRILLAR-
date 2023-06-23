import axiosClient from "./axiosClient";
const { XMLParser } = require("fast-xml-parser");

export const years: { [key: string]: string } = {
  2010: "2010",
  2011: "2011",
  2013: "2013",
  2014: "2014",
  2015: "2015",
  2016: "2016",
  2017: "2017",
  2018: "2018",
};
export const rounds: { [key: string]: string } = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
};
export const convertXmlToJson = (xml: string): any => {
  const options = {
    // ignoreAttributes: false,
    // attributeNamePrefix: "@",
  };

  const parser = new XMLParser(options);
  let jsonObj = parser.parse(xml);
  return jsonObj;
};

export const dummyHeloSlidesPC = [
  {
    img: "https://wallpapercave.com/wp/wp5738575.jpg",
    title:
      "PALMER: Norris was in great overtaking form in Canada – but was his ‘unsportsmanlike behaviour’ penalty fair?",
  },
  {
    img: "https://wallpapercave.com/wp/wp3607781.jpg",
    title: "WATCH: F1 for beginners – Everything you need to know about F1",
  },
  {
    img: "https://wallpapercave.com/wp/wp9001455.jpg",
    title: "IN NUMBERS: The amazing stats behind Red Bull’s century of F1 wins",
  },
];

export const dummyHeloSlidesMobile = [
  {
    img: "https://mfiles.alphacoders.com/943/943980.jpg",
    title:
      "PALMER: Norris was in great overtaking form in Canada – but was his ‘unsportsmanlike behaviour’ penalty fair?",
  },
  {
    img: "https://mfiles.alphacoders.com/926/926023.jpg",
    title: "WATCH: F1 for beginners – Everything you need to know about F1",
  },
  {
    img: "https://mfiles.alphacoders.com/919/919247.jpg",
    title: "IN NUMBERS: The amazing stats behind Red Bull’s century of F1 wins",
  },
];

const formula1 = {
  getDrivers: () => {
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
export default formula1;
