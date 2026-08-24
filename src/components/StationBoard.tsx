import { stations, orders } from '../data/kitchen';

export default function StationBoard() {
  return (
    <div className="kitchen-panel h-full flex flex-col">
      <div className="kitchen-header">
        <span className="kitchen-label">Stations</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {stations.map(s => {
          const load = Math.round((s.orders / s.capacity) * 100);
          const stationOrders = orders.filter(o => o.items.some(it => it.station === s.name));
          return (
            <div key={s.name} className="rounded-lg border border-kitchen-border p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: s.color }} />
                  <span className="font-bold text-sm text-kitchen-text">{s.name}</span>
                  <span className="text-[10px] text-kitchen-muted">{s.chef}</span>
                </div>
                <span className="text-[10px] font-bold" style={{ color: load > 80 ? '#dc2626' : load > 50 ? '#ea580c' : '#16a34a' }}>{load}%</span>
              </div>
              <div className="mt-1.5 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(load, 100)}%`, backgroundColor: s.color }} />
              </div>
              <div className="mt-2 space-y-0.5">
                {stationOrders.slice(0, 3).map(o => (
                  <div key={o.id} className="flex items-center justify-between text-[10px]">
                    <span className="text-kitchen-text">{o.id} - T{o.table}</span>
                    <span className={`font-medium ${o.status === 'ready' ? 'text-order-ready' : 'text-kitchen-muted'}`}>{o.status}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}