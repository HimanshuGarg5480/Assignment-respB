import CarousalSection from "./Sections/CarousalSection";
import OnParameterSection from "./Sections/OnParameterSection";
import PageViews from "./Sections/Analytics/PageViews";
function Dashboard() {
  return (
    <div className="flex-1s">
      <CarousalSection />
      <OnParameterSection />
      <PageViews />
    </div>
  );
}

export default Dashboard;
