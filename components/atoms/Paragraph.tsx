/**@jsx h */
import { tw } from "$twind";
import { ComponentChildren, h } from "$fresh/runtime.ts";
import useGlobalStyles from "$root/hooks/useGlobalStyles.ts";

interface ParagraphProps {
  children?: ComponentChildren;
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p class={useGlobalStyles().bodyText}>
      {children ? children : "<Paragraph>your text goes here!</Paragraph>"}
    </p>
  );
}
