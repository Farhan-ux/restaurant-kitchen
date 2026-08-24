import { orders } from '../data/kitchen';

export default function KitchenHeader() {
  const active = orders.filter(o => o.status !== 'served' && o.status !== 'cancelled').length;
  const ready = orders.filter(o => o.status === 'ready').length;
  const cooking = orders.filter(o => o.status === 'cooking').length;
  return (
    <header className="h-12 bg-kitchen-header flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-white font-extrabold text-sm tracking-wide">SAVOY KITCHEN</span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400 text-[10px]">Dinner Service</span>
      </div>
      <div className="flex items-center gap-4 text-[10px]">
        <span className="text-order-new font-bold">{orders.filter(o=>o.status==='new').length} NEW</span>
        <span className="text-order-cooking font-bold">{cooking} COOKING</span>
        <span className="text-order-ready font-bold">{ready} READY</span>
        <span className="text-gray-500">{active} ACTIVE</span>
        <span className="text-gray-500">|</span>
        <span className="text-gray-400">12:37 PM</span>
      </div>
    </header>
  );
}