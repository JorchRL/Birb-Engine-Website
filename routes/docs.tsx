/**@jsx h */
/**@jsxFrag Fragment */

import { Fragment, h } from "$fresh/runtime.ts";
import { tw } from "$twind";
import useGlobalStyles from "$root/hooks/useGlobalStyles.ts";

import Header from "$root/components/atoms/Header.tsx";
import Paragraph from "$root/components/atoms/Paragraph.tsx";

export default function Docs() {
  return (
    <div class={tw`flex flex-col justify-center items-center h-screen`}>
      <Header>No docs yet :(</Header>
      <Paragraph>
        In the meantime, why don't you check the{" "}
        <a
          class={useGlobalStyles().link}
          href="https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno"
        >
          GitHub repo
        </a>?
      </Paragraph>
    </div>
  );
}
