export interface Order {
  id: string; table: number; items: { name: string; qty: number; mods?: string; station: string }[]; status: 'new' | 'cooking' | 'ready' | 'served' | 'cancelled'; time: string; server: string; priority: 'normal' | 'rush' | 'vip'; }

export interface Station { name: string; color: string; orders: number; capacity: number; chef: string; };

export const orders: Order[] = [
  { id: '#4012', table: 5, items: [{ name: 'Wagyu Ribeye', qty: 1, mods: 'Med-Rare', station: 'Grill' }, { name: 'Truffle Fries', qty: 1, station: 'Fry' }], status: 'cooking', time: '12:34', server: 'Maria', priority: 'vip' },
  { id: '#4011', table: 12, items: [{ name: 'Lobster Risotto', qty: 2, station: 'Sauté' }, { name: 'Caesar Salad', qty: 1, mods: 'No croutons', station: 'Pantry' }], status: 'cooking', time: '12:31', server: 'James', priority: 'normal' },
  { id: '#4010', table: 3, items: [{ name: 'Pan-Seared Salmon', qty: 1, station: 'Sauté' }, { name: 'Roasted Veg', qty: 1, station: 'Oven' }], status: 'ready', time: '12:28', server: 'Sarah', priority: 'normal' },
  { id: '#4009', table: 8, items: [{ name: 'Burger Deluxe', qty: 2, mods: 'One no pickle', station: 'Grill' }, { name: 'Onion Rings', qty: 1, station: 'Fry' }, { name: 'Milkshakes', qty: 2, station: 'Pantry' }], status: 'new', time: '12:35', server: 'Maria', priority: 'rush' },
  { id: '#4008', table: 1, items: [{ name: 'Pasta Carbonara', qty: 1, station: 'Sauté' }], status: 'served', time: '12:15', server: 'James', priority: 'normal' },
  { id: '#4007', table: 6, items: [{ name: 'Tomahawk Steak', qty: 1, mods: 'MR + extra herb butter', station: 'Grill' }, { name: 'Baked Potato', qty: 1, station: 'Oven' }, { name: 'Creamed Spinach', qty: 1, station: 'Sauté' }], status: 'cooking', time: '12:22', server: 'Sarah', priority: 'normal' },
  { id: '#4006', table: 10, items: [{ name: 'Fish & Chips', qty: 1, station: 'Fry' }, { name: 'Mushroom Soup', qty: 1, station: 'Sauté' }], status: 'new', time: '12:36', server: 'Maria', priority: 'normal' },
  { id: '#4005', table: 4, items: [{ name: 'Duck Confit', qty: 1, station: 'Oven' }, { name: 'Arugula Salad', qty: 1, station: 'Pantry' }], status: 'ready', time: '12:20', server: 'James', priority: 'normal' },
  { id: '#4004', table: 7, items: [{ name: 'Rack of Lamb', qty: 2, mods: 'MR', station: 'Grill' }, { name: 'Dauphinoise', qty: 1, station: 'Oven' }], status: 'cooking', time: '12:25', server: 'Sarah', priority: 'vip' },
  { id: '#4003', table: 2, items: [{ name: 'Bruschetta', qty: 1, station: 'Pantry' }, { name: 'Margherita Pizza', qty: 1, station: 'Oven' }], status: 'served', time: '12:10', server: 'Maria', priority: 'normal' },
];

export const stations: Station[] = [
  { name: 'Grill', color: '#dc2626', orders: 3, capacity: 4, chef: 'Chef Marco' },
  { name: 'Sauté', color: '#ea580c', orders: 3, capacity: 4, chef: 'Chef Lena' },
  { name: 'Oven', color: '#16a34a', orders: 3, capacity: 3, chef: 'Chef Raj' },
  { name: 'Fry', color: '#eab308', orders: 2, capacity: 3, chef: 'Chef Yuki' },
  { name: 'Pantry', color: '#2563eb', orders: 2, capacity: 3, chef: 'Chef Ana' },
];

export function statusColor(s: string): string {
  const map: Record<string, string> = { new: '#dc2626', cooking: '#ea580c', ready: '#16a34a', served: '#2563eb', cancelled: '#6b7280' };
  return map[s] || '#6b7280';
}
