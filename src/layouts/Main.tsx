import Header from '../components/UI/Header';
import SideBar from '../components/UI/SideBar';
import Title from '../components/UI/Title';
function Main() {
  return (
    <div className="flex-grow">
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <div className="flex w-full flex-col gap-8 lg:px-32 lg:py-16">
          <Title />
          <div className="flex gap-8">
            <div className="flex-3/4 rounded bg-gray-700 p-12">test</div>
            <div className="flex-1/4 rounded bg-gray-700 p-12">test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
