export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
}

export interface ApiResponse<T> {
  success: boolean;
  count: number;
  query?: string;
  data: T;
}
