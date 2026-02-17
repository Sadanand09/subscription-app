export interface User {
  id: string;
  name: string;
  avatar: any;
}

export interface Subscription {
  id: string;
  icon?: any;
  name: string;
  price: number;
  billing: string;
  date?: string;
  color?: string;
}

export interface UpcomingSubscription {
  id: string;
  icon?: any;
  name: string;
  price: number;
  daysLeft: number;
}

export interface ChartData {
  label: string;
  value: number;
}
