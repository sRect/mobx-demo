import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { useLocalStore, observer, useLocalObservable } from "mobx-react-lite";
import { Provider } from "mobx-react";
import store from "@/store";
import Home from "@/pages/Home";
import About from "@/pages/About";
import About2 from "@/pages/About2";
import FuncCom from "@/pages/FuncCom";

export const Context = createContext(null);

console.log("store App", store);

const App = () => {
  // const store = useLocalStore(() => {
  //   return {
  //     num: 1,
  //     get count() {
  //       return store.num;
  //     },
  //     increase() {
  //       store.num+=1;
  //     },
  //     decrease() {
  //       store.num-=1;
  //     }
  //   }
  // });

  // 'useLocalStore' is deprecated, use 'useLocalObservable' instead.
  const storeContext = useLocalObservable(() => store);

  return (
    <div>
      <hr />
      <Context.Provider value={storeContext}>
        {/* Provider 给子组件为mobx-react使用 */}
        <Provider store={storeContext}>
          <Router>
            <Link to="/">function hooks component </Link> |{" "}
            <Link to="/func">function componet</Link>|{" "}
            <Link to="/about">class component</Link>|{" "}
            <Link to="/about2">class component2</Link>| <br />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/func" component={FuncCom}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/about2" component={About2}></Route>
              <Redirect to="/" />
            </Switch>
          </Router>
        </Provider>
      </Context.Provider>
    </div>
  );
};

export default observer(App);
