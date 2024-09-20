export interface Service {
  id: number;
  title: string;
  href: string;
}

export interface Industries {
  id: number;
  title: string;
  href: string;
}

export interface Link {
  service: Service[];
  industri: Industries[];
}

export const links: Link[] = [
  {
    service: [
      {
        id: 1,
        title: "Web Development",
        href: "#",
      },
      {
        id: 2,
        title: "UI Design",
        href: "#",
      },
      {
        id: 3,
        title: "UX Design",
        href: "#",
      },
      {
        id: 4,
        title: "Identity & Branding",
        href: "#",
      },
      {
        id: 5,
        title: "Mobile App Development",
        href: "#",
      },
      {
        id: 6,
        title: "iOS Development",
        href: "#",
      },
      {
        id: 7,
        title: "ROR",
        href: "#",
      },
      {
        id: 8,
        title: "C# .NET",
        href: "#",
      },
      {
        id: 9,
        title: "Support & Maintenance",
        href: "#",
      },
      {
        id: 10,
        title: "WordPress",
        href: "#",
      },
      {
        id: 11,
        title: "Low Code Development",
        href: "#",
      },
    ],

    industri: [
      {
        id: 1,
        title: "E-Learning",
        href: "#",
      },
      {
        id: 2,
        title: "Fintech",
        href: "#",
      },
      {
        id: 3,
        title: "Healthcare",
        href: "#",
      },
      {
        id: 4,
        title: "Web3",
        href: "#",
      },
      {
        id: 5,
        title: "Social Platfroms",
        href: "#",
      },
      {
        id: 6,
        title: "SaaS",
        href: "#",
      },
      {
        id: 7,
        title: "Real Estate",
        href: "#",
      },
      {
        id: 8,
        title: "E - Commerce",
        href: "#",
      },
    ],
  },
];
