import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #12486b;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  const logo =
    "https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYtI_MIrVq4WfN7M.qN7gV3ayNiQeJK6Uxg366DH3bnRmVWMFBWWyXonVyp6x0RYE1elb_jkQQQH7FwsNBBqQO4iFrOIwXtaGkMjmrISfBfgMsCEGwIBPArmzCSVWYx1zA--&format=source";
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
        <h3 style={{ marginLeft: "8px" }}>Code Editor</h3>
      </Toolbar>
    </Container>
  );
};

export default Header;
