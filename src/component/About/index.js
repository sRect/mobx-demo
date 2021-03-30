import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

// https://blog.csdn.net/roamingcode/article/details/95069891
// class componet

@inject("store")
@observer
class About extends Component {

  componentDidMount() {
    console.log(`class component store ↓↓↓`);
    console.log(toJS(this.props.store));
  }

  render() {
    const { store } = this.props;
    return (
      <div>
        <h5>class page</h5>
        count: {store?.count} <br />
        double: {store?.double}
        <br />
        <button onClick={() => store.increase()}>increase</button>
        &nbsp;
        <button onClick={() => store.decrease()}>decrease</button>
      </div>
    );
  }
}

export default About;
