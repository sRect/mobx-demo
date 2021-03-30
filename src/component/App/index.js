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
import { createStore } from "./store";
import Home from "@/component/Home";
import About from "@/component/About";
import FuncCom from "@/component/FuncCom";

export const Context = createContext(null);

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
  const store = useLocalObservable(createStore);

  return (
    <div>
      <hr />
      <Context.Provider value={store}>
        {/* Provider 给子组件为mobx-react使用 */}
        <Provider store={store}>
          <Router>
            <Link to="/">function hooks component </Link> | {" "}
            <Link to="/func">function componet</Link>| {" "}
            <Link to="/about">class componet</Link>
            <br />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/func" component={FuncCom}></Route>
              <Redirect to="/" />
            </Switch>
          </Router>
        </Provider>
      </Context.Provider>
    </div>
  );
};

export default observer(App);
