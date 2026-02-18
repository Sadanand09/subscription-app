import { Subscription, UpcomingSubscription } from "@/types";
import { icons } from "../icons";

export const user = {
  name: "Adrian Hajdin",
};

export const balance = {
  amount: 198.53,
  date: "04/21",
};

export const upcoming: UpcomingSubscription[] = [
  {
    id: "1",
    icon: icons.notion,
    name: "Notion Team",
    price: 20,
    daysLeft: 12,
  },
  {
    id: "2",
    icon: icons.dropbox,
    name: "Dropbox",
    price: 10,
    daysLeft: 32,
  },
  {
    id: "3",
    icon: icons.notion,
    name: "Netflix",
    price: 45,
    daysLeft: 39,
  },
];

export const subscriptions: Subscription[] = [
  {
    id: "1",
    icon: icons.openai,
    name: "OpenAI",
    price: 42.25,
    billing: "per month",
    date: "June 05, 18:00",
    color: "#9DBBE0",
  },
  {
    id: "2",
    icon: icons.adobe,
    name: "Adobe",
    price: 7.72,
    billing: "per month",
    date: "June 25, 12:00",
    color: "#F9D84A",
  },
  {
    id: "3",
    icon: icons.medium,
    name: "Medium",
    price: 13.08,
    billing: "per month",
    date: "July 13, 2:00",
    color: "#8BCBB8",
  },
  {
    id: "4",
    icon: icons.medium,
    name: "Claude",
    price: 9.84,
    billing: "per month",
    date: "June 25, 12:00",
    color: "#F9D84A",
  },
  {
    id: "5",
    icon: icons.medium,
    name: "Canva",
    price: 43.89,
    billing: "per month",
    date: "June 30, 16:00",
    color: "#8BCBB8",
  },
];
