import ActivityChart from '../components/UI/charts/ActivityChart';
import PerformanceChart from '../components/UI/charts/PerformanceChart';
import ScoreChart from '../components/UI/charts/ScoreChart';
import SessionChart from '../components/UI/charts/SessionChart';
import Header from '../components/UI/Header';
import SideBar from '../components/UI/SideBar';
import Title from '../components/UI/Title';
import KpiCards from './Kpi';

/**
 * Mise en page principale de l'application SportSee.
 * Affiche l'en-tête, la barre latérale, les graphiques et les KPI.
 * @returns {JSX.Element} Structure principale de la page d'accueil
 */
function Main() {
  return (
    <div className="flex-grow">
      <Header />
      <div className="flex flex-row">
        <SideBar />
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
              <KpiCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
