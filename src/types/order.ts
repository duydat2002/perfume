export interface IOrder {
  id: string;
  orderDate: string;
  status:
    | "pending" // Đang chờ xử lí
    | "confirmed" // Đã xác nhận bởi của hàng
    | "delivering" // Đang giao
    | "delivered" // Đã giao
    | "cancelled"; // Đã hủy
  price: number;
}
