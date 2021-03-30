import React from "react";
import { inject, observer } from "mobx-react";

const FuncCom = ({ store }) => {
  return (
    <div>
      <h5>function component page</h5>
      count: {store?.count} <br />
      double: {store?.double}
      {/* <Observer>{() => <div>double: {store?.double}</div>}</Observer> */}
      <br />
      <button onClick={() => store.increase()}>increase</button>
      &nbsp;
      <button onClick={() => store.decrease()}>decrease</button>
    </div>
  );
};

export default inject("store")(observer(FuncCom));
