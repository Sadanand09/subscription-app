import { Subscription } from "@/types";
import { icons } from "../icons";

export const mySubscriptions: Subscription[] = [
  {
    id: "1",
    name: "Dropbox",
    icon: icons.dropbox,
    price: 16.96,
    plan: "Premium",
    billing: "1 month",
  },
  {
    id: "2",
    name: "Spotify",
    icon: icons.spotify,
    price: 76.77,
    plan: "Family Plan",
    billing: "3 months",
  },
  {
    id: "3",
    name: "GitHub Copilot",
    icon: icons.github,
    price: 49.99,
    plan: "Pro Business",
    billing: "1 month",
  },
  {
    id: "4",
    name: "Adobe",
    icon: icons.adobe,
    price: 98.1,
    plan: "Family Plan",
    billing: "2 month",
  },
  {
    id: "5",
    name: "Figma",
    icon: icons.figma,
    price: 19.23,
    plan: "Premium",
    billing: "1 month",
  },
];
