export type Plan = {
  id: string;
  title: string;
  duration: string;
  price: string;
  amount: number;
  text: string;
  points: string[];
};

export const plans: Plan[] = [
  {
    id: "indledende",
    title: "Indledende samtale",
    duration: "60 min",
    price: "800 kr.",
    amount: 80000,
    text: "Vi afklarer din eller dit barns situation, og hvilket forløb der giver mest mening at gå videre med.",
    points: ["Afklaring af behov og forventninger", "Anbefaling til videre forløb", "Virtuelt eller i dit hjem"],
  },
  {
    id: "psykoedukation",
    title: "Psykoedukation & mestringssession",
    duration: "60 min",
    price: "650 kr.",
    amount: 65000,
    text: "Løbende sessioner med psykoedukation og konkrete redskaber, til dig selv eller som forælder til et neurodivergent barn.",
    points: ["Tilpasset dagens behov", "Redskaber til hverdagen", "Kan foregå virtuelt eller i hjemmet"],
  },
  {
    id: "sanseterapi",
    title: "Sanseterapi-session",
    duration: "45 min",
    price: "600 kr.",
    amount: 60000,
    text: "Individuel session med fokus på at forstå og regulere sanseforstyrrelser.",
    points: ["Sansescreening", "Konkrete reguleringsstrategier", "Til børn, unge og voksne"],
  },
];

export const packagePlan = {
  id: "mestringsforloeb",
  title: "Mestringsforløb, 6 gange",
  price: "3.500 kr.",
  amount: 350000,
  text: "Seks sessioner betalt samlet: 3.500 kr. i stedet for 3.900 kr., til dig der gerne vil have et sammenhængende forløb med fast opfølgning.",
};

export const allPlans = [...plans, packagePlan];
