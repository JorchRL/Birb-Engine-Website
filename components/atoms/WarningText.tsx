/**@jsx h */
import { tw } from "$twind";
import { h } from "$fresh/runtime.ts";
import useGlobalStyles from "$root/hooks/useGlobalStyles.ts";

interface CodeProps {
  children?: string;
}

export default function WarningText({ children }: CodeProps) {
  return (
    <div class={useGlobalStyles().gWarningText}>
      <div class={tw`mr-8 text-xl`}>⚠️</div>
      {children ? children : "<Code>your code goes here!</Code>"}
    </div>
  );
}
