/**@jsx h */
import { tw } from "$twind";
import { h } from "$fresh/runtime.ts";
import useGlobalStyles from "$root/hooks/useGlobalStyles.ts";

interface CodeProps {
  children?: string;
}

export default function Code({ children }: CodeProps) {
  return (
    <p class={useGlobalStyles().codeText}>
      {children ? children : "<Code>your code goes here!</Code>"}
    </p>
  );
}
