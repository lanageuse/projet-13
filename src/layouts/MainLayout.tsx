import ActivityChart from '../components/charts/ActivityChart';
import PerformanceChart from '../components/charts/PerformanceChart';
import ScoreChart from '../components/charts/ScoreChart';
import SessionChart from '../components/charts/SessionChart';
import Header from './Header';
import SideBar from './SideBar';
import Title from './Title';
import KpiList from '../components/kpi/KpiList';
import { DashboardStatus } from '../components/DashboardStatus';

/**
 * Mise en page principale de l'application SportSee.
 * Affiche l'en-tête, la barre latérale, les graphiques et les KPI.
 * @returns {JSX.Element} Structure principale de la page d'accueil
 */
function MainLayout() {
  return (
    <div className="flex-grow">
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <DashboardStatus>
        <div className="flex w-full flex-col gap-8 px-6 py-6 sm:ml-32 lg:px-24 lg:py-16">
          <Title />
          <div className="flex flex-col gap-8 xl:flex-row">
            <div className="flex flex-3/4 flex-col gap-8">
              <div className="rounded-chart bg-gray-700 p-6">
                <ActivityChart />
              </div>
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="bg-red rounded-chart flex-1/3">
                  <SessionChart />
                </div>
                <div className="bg-blue rounded-chart flex-1/3 p-2">
                  <PerformanceChart />
                </div>
                <div className="rounded-chart relative flex-1/3 bg-gray-700">
                  <ScoreChart />
                </div>
              </div>
            </div>
            <div className="flex flex-1/4 flex-col gap-10">
              <KpiList />
            </div>
          </div>
        </div>
        </DashboardStatus>
      </div>
    </div>
  );
}

export default MainLayout;
