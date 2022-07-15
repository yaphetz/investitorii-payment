export interface Order {
    amount: number;
    currency: string;
    products?: string[];
    subscription: boolean;
    transactionID?: string;
    userDetails?: any;
    dateTime?: Date;
  }
  