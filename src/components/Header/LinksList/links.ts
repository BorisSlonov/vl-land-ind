export interface HeaderLink {
  linkText: string;
  link?: string;
  subLinks?: {
    linkText: string;
    link: string;
  }[];
}

export const links: HeaderLink[] = [
  {
    linkText: "Характеристики",
    link: "/#characteristics",
  },
  {
    linkText: "Комплектация",
    link: "/#kit",
  },
  {
    linkText: "Приложение",
    link: "/#app",
  },
  {
    linkText: "Обучение",
    link: "/#education-center",
  },
  {
    linkText: "Контакты",
    link: "/#contacts",
  },
];
