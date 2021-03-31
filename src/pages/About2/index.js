import React, { Component } from 'react';
import {Observer} from 'mobx-react-lite';
import { Context } from "@/App";

class About2 extends Component {
  render() {
    return (
      <div>
        <Context.Consumer>
          {(store) => (
            <div>
              <h5>class component2 page</h5>
              {/* count: {store?.count} <br />
              double: {store?.double} */}
              {/* 必须使用Observer包裹，不然视图不会更新 */}
              <Observer>{() => <div>count: {store?.count}</div>}</Observer>
              <Observer>{() => <div>double: {store?.double}</div>}</Observer>
              <br />
              <button onClick={() => store.increase()}>increase</button>
              &nbsp;
              <button onClick={() => store.decrease()}>decrease</button>
            </div>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default About2;