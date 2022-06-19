/** @jsx h */
import { h } from "$fresh/runtime.ts";
import { tw } from "$twind";
import { useStyles } from "../hooks/useStyles.ts";

const logo = "/birb-logo.png";

export default function Home() {
  const { styles, setStyles } = useStyles();

  return (
    <div>
      <img width="250" src={logo} />
      <h1>The Birb Engine</h1>
      <p class={styles.bodyText}>
        {"this is the future website of the birb engine!"}
      </p>
    </div>
  );
}
