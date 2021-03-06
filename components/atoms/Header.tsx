/**@jsx h */
import { tw } from "twind";
import { ComponentChildren, h } from "preact";
import useGlobalStyles from "/hooks/useGlobalStyles.ts";

interface HeaderProps {
  spacer?: boolean;
  children?: ComponentChildren;
}

export default function Paragraph({ children, spacer = false }: HeaderProps) {
  const styles = useGlobalStyles();
  return (
    <p
      class={spacer ? styles.headerText + " " + tw`pt-6` : styles.headerText}
    >
      {children ? children : "<Header>your header goes here!</Header>"}
    </p>
  );
}
