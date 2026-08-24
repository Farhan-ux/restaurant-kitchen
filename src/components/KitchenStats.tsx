import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { orders } from '../data/kitchen';

export default function KitchenStats() {
  const statusCounts = ['new','cooking','ready','served','cancelled'].map(s => ({
    status: s.toUpperCase(), count: orders.filter(o => o.status === s).length,
  }));
  const colors = ['#dc2626','#ea580c','#16a34a','#2563eb','#6b7280'];

  const servers = ['Maria','James','Sarah'].map(s => ({
    name: s,
    active: orders.filter(o => o.server === s && o.status !== 'served').length,
  }));

  return (
    <div className="kitchen-panel h-full flex flex-col">
      <div className="kitchen-header">
        <span className="kitchen-label">Stats</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        <div>
          <div className="kitchen-label mb-1">Order Status</div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={statusCounts} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="status" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} width={60} />
              <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={12}>
                {statusCounts.map((_, i) => <Cell key={i} fill={colors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <div className="kitchen-label mb-1">Server Load</div>
          {servers.map(s => (
            <div key={s.name} className="flex items-center justify-between text-[11px] py-0.5">
              <span className="text-kitchen-text">{s.name}</span>
              <span className="font-bold text-kitchen-text">{s.active} orders</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
