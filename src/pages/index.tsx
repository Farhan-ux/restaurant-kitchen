import type { NextPage } from 'next';
import KitchenHeader from '../components/KitchenHeader';
import OrderCards from '../components/OrderCards';
import StationBoard from '../components/StationBoard';
import KitchenStats from '../components/KitchenStats';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-kitchen-bg overflow-hidden">
      <KitchenHeader />
      <div className="flex flex-1 min-h-0 p-2 gap-2">
        <div className="flex-1 min-w-0"><OrderCards /></div>
        <div className="w-64 shrink-0 flex flex-col gap-2">
          <div className="flex-1 min-h-0"><StationBoard /></div>
          <div className="flex-1 min-h-0"><KitchenStats /></div>
        </div>
      </div>
    </div>
  );
};

export default Home;