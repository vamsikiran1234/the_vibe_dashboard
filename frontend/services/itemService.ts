import api from './api';
import { Item, ApiResponse } from '@/types/item';

/**
 * Fetch all items or search items by query
 * @param query - Optional search term for filtering by name or category
 * @returns Promise with items data
 */
export const getItems = async (query?: string): Promise<Item[]> => {
  try {
    const params = query ? { q: query } : {};
    const response = await api.get<ApiResponse<Item[]>>('/items', { params });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

/**
 * Get items count
 * @param query - Optional search term
 * @returns Promise with count
 */
export const getItemsCount = async (query?: string): Promise<number> => {
  try {
    const params = query ? { q: query } : {};
    const response = await api.get<ApiResponse<Item[]>>('/items', { params });
    return response.data.count;
  } catch (error) {
    console.error('Error fetching items count:', error);
    throw error;
  }
};
