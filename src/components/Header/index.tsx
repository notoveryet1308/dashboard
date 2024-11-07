import { StyledHeaderWrapper } from "./style";
import SigNozLogo from "../../assets/SigNozLogo.svg";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <img src={SigNozLogo} alt="SigNoz Logo" />
      <span>SigNoz</span>
    </StyledHeaderWrapper>
  );
};

export default Header;
