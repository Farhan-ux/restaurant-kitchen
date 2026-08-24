import { useState } from 'react';
import { orders, statusColor } from '../data/kitchen';

type Filter = 'all' | 'new' | 'cooking' | 'ready';

export default function OrderCards() {
  const [filter, setFilter] = useState<Filter>('all');
  const filtered = filter === 'all' ? orders : orders.filter(o => o.status === filter);
  const byTime = [...filtered].sort((a, b) => (a.status === 'new' ? 0 : 1) - (b.status === 'new' ? 0 : 1) || b.time.localeCompare(a.time));

  return (
    <div className="kitchen-panel h-full flex flex-col">
      <div className="kitchen-header">
        <div className="flex gap-2">
          {(['all','new','cooking','ready'] as Filter[]).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-2.5 py-1 rounded-md text-[10px] font-semibold cursor-pointer transition-all ${
                filter === f ? 'bg-kitchen-header text-white shadow' : 'bg-gray-100 text-kitchen-muted hover:bg-gray-200'
              }`}>{f.toUpperCase()}</button>
          ))}
        </div>
        <span className="text-[10px] text-kitchen-muted">{byTime.length} orders</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {byTime.map(o => (
          <div key={o.id} className="rounded-lg border-2 p-3 bg-white" style={{ borderLeftColor: statusColor(o.status), borderLeftWidth: 4 }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-kitchen-text">{o.id}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-kitchen-muted">T{o.table}</span>
                {o.priority === 'rush' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-order-new text-white font-bold">RUSH</span>}
                {o.priority === 'vip' && <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500 text-white font-bold">VIP</span>}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-kitchen-muted">{o.server}</span>
                <span className="text-[10px] text-kitchen-muted">{o.time}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: statusColor(o.status) }}>{o.status.toUpperCase()}</span>
              </div>
            </div>
            <div className="mt-2 space-y-1">
              {o.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px]">
                  <span className="text-kitchen-text font-medium">{item.qty}x {item.name}</span>
                  {item.mods && <span className="text-kitchen-muted italic">({item.mods})</span>}
                  <span className="ml-auto text-[9px] px-1.5 py-0.5 rounded" style={{ backgroundColor: statusColor(o.status) + '15', color: statusColor(o.status) }}>{item.station}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}