import WidgetContainer from "../WidgetContainer";
import WidgetListing from "../WidgetListing";
import { StyledDashboardWrapper } from "./style";

const Dashboard = () => {
  return (
    <StyledDashboardWrapper>
      <WidgetListing />
      <WidgetContainer />
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
