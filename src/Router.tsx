import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "./routes/atoms";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDartAtom = () => setDarkAtom((prev) => !prev);
  return (
    <BrowserRouter>
      <DisplayMode isActive={isDark} onClick={toggleDartAtom}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </DisplayMode>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

const DisplayMode = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "white" : "black")};
  color: ${(props) => (props.isActive ? "black" : "white")};
  font-size: 18px;
  position: relative;
  top: 30px;
  left: 50px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  z-index: 1;
  text-align: center;
`;
