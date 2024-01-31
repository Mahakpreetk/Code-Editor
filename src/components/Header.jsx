import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: darkblue;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  const logo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm16cvpw1DAPwmeRC_tz40EMCUk0xuspBDodXjm5LG9W7I-l2W7N2nhRvyMMUVXavRUko&usqp=CAU";
  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
        <h3 style={{ marginLeft: "45%" }}>Code Editor</h3>
      </Toolbar>
    </Container>
  );
};

export default Header;
