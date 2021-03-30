import React, { useContext, useEffect } from "react";
import { useObserver, observer } from "mobx-react-lite";
import { toJS, reaction, when } from "mobx";
import { Context } from "@/App";

// https://blog.csdn.net/roamingcode/article/details/95069891
// function component

const Home = () => {
  const store = useContext(Context);

  useEffect(() => {
    console.log("store===>", toJS(store));

    reaction(
      () => store.count,
      (cur, pre) => {
        console.log(`diff===> cur: ${cur}, pre: ${pre}`);
      }
    );

    when(
      () => store.count < 0,
      () => {
        console.log("小于0");
      }
    );
  }, [store]);

  // [mobx-react-lite] 'useObserver(fn)' is deprecated. Use `<Observer>{fn}</Observer>` instead, or wrap the entire component in `observer`.
  // return useObserver(() => (
  //   <div>
  //     <h5>home page</h5>
  //     count: {store?.count} <br />
  //     double: {store?.double}
  //     {/* <Observer>{() => <div>double: {store?.double}</div>}</Observer> */}
  //     <br />
  //     <button onClick={() => store.increase()}>increase</button>
  //     &nbsp;
  //     <button onClick={() => store.decrease()}>decrease</button>
  //   </div>
  // ));

  return (
    <div>
      <h5>hooks page</h5>
      count: {store?.count} <br />
      double: {store?.double}
      {/* <Observer>{() => <div>double: {store?.double}</div>}</Observer> */}
      <br />
      <button onClick={() => store.increase()}>increase</button>
      &nbsp;
      <button onClick={() => store.decrease()}>decrease</button>
      <br />
      age: {store?.age} <br />
      introduce: {store?.introduce} <br />
    </div>
  );
};

// export default Home;
export default observer(Home);

