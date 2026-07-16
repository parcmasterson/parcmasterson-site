export type Role = {
  title: string;
  company: string;
  dates: string;
};

export const experience: Role[] = [
  { title: "Lead Service Designer", company: "Harmonic Design", dates: "June 2021 – Present" },
  { title: "Innovation & Experience Director", company: "Signal Theory", dates: "Aug 2018 – May 2021" },
  { title: "Associate Creative Director", company: "Signal Theory", dates: "Nov 2014 – July 2018" },
  { title: "Senior Art Director", company: "Sullivan Higdon & Sink", dates: "Jan 2013 – Oct 2014" },
  { title: "Senior Art Director", company: "VML", dates: "June 2011 – Jan 2013" },
  { title: "Art Director", company: "Sullivan Higdon & Sink", dates: "June 2007 – June 2011" },
  { title: "Art Director", company: "VML", dates: "April 2006 – June 2007" },
  { title: "Graphic Designer", company: "BNIM Architects", dates: "September 2004 – April 2006" },
];

export type Degree = {
  credential: string;
  school: string;
};

export const education: Degree[] = [
  { credential: "BFA, Graphic Design / Visual Communication", school: "Kansas State University" },
  { credential: "BS, Advertising / Mass Communication", school: "Kansas State University" },
];
