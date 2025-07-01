import ActivityChart from '../components/UI/charts/ActivityChart';
import KpiChart from '../components/UI/charts/KpiChart';
import ScoreChart from '../components/UI/charts/ScoreChart';
import SessionChart from '../components/UI/charts/SessionChart';
import Header from '../components/UI/Header';
import SideBar from '../components/UI/SideBar';
import Title from '../components/UI/Title';
function Main() {
  return (
    <div className="flex-grow">
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <div className="flex w-full flex-col gap-8 lg:px-24 lg:py-16">
          <Title />
          <div className="flex gap-8">
            <div className="flex flex-3/4 flex-col gap-8">
              <div className="rounded-chart bg-gray-700 p-12">
                <ActivityChart />
              </div>
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="bg-red rounded-chart h-80 flex-1/3">
                  <SessionChart />
                </div>
                <div className="bg-blue rounded-chart flex-1/3 pt-2">
                  <KpiChart />
                </div>
                <div className="rounded-chart relative flex-1/3 bg-gray-700">
                  <ScoreChart />
                </div>
              </div>
            </div>
            <div className="flex-1/4 rounded bg-gray-700 p-12">test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
