/**@jsx h */

import { Component, h } from "$fresh/runtime.ts";
import { tw } from "$twind";

import threeApp from "$root/components/demo_helper.tsx";

export default class Demo3d extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    // @ts-ignore this.base is available on componentDidMount()...
    threeApp(this.base, this.threeCallback);
  }

  threeCallback() {
    console.log("Callback!");
  }

  render() {
    return (
      // this css will set the size of the "screen" of the computer on the hero
      <div class={tw` absolute w-[100vw] h-[100vh] -z-[2]`}>
      </div>
    );
  }
}
