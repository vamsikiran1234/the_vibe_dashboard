import api from './api';
import { Item, ApiResponse } from '@/types/item';

/**
 * Fetch all items or search items by query
 * @param query - Optional search term for filtering by name or category
 * @returns Promise with items data
 * @throws Error if API request fails
 */
export const getItems = async (query?: string): Promise<Item[]> => {
  const params = query ? { q: query } : {};
  const response = await api.get<ApiResponse<Item[]>>('/items', { params });
  return response.data.data;
};

/**
 * Get items count
 * @param query - Optional search term
 * @returns Promise with count
 * @throws Error if API request fails
 */
export const getItemsCount = async (query?: string): Promise<number> => {
  const params = query ? { q: query } : {};
  const response = await api.get<ApiResponse<Item[]>>('/items', { params });
  return response.data.count;
};
