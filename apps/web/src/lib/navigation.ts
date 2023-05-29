type Navigation = {
  label: string;
  href: string;
};

const navigation: Navigation[] = [
  {
    label: "Vår ekspertise",
    href: "/expertises",
  },
  // TODO: Add clients back later
  // {
  //   label: "Våre klienter",
  //   href: "/clients",
  // },
  {
    label: "Om oss",
    href: "/about",
  },
  {
    label: "Våre ansatte",
    href: "/employees",
  },
];

export default navigation;
