type OrderStatus =
  | "confirmed"
  | "processing"
  | "dispatched"
  | "in transit"
  | "delayed"
  | "cancelled";

export interface Order {
  pid: string;
  uid: string;
  status: OrderStatus;
  startDate: Date;
  endDate?: Date;
}

export interface OrderDto {
  pid: string;
  uid: string;
}
