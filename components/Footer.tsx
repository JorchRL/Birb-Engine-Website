/**@jsx h */

import { h } from "preact";
import { tw } from "$twind";

import useGlobalStyles from "/hooks/useGlobalStyles.ts";

export default function Footer() {
  const styles = {
    ...useGlobalStyles(),
    footer: tw
      `border(t-2 gray-200) bg-gray-50 flex flex-col gap-4 justify-center 
      
      sm:(h-32)`,
    inner: tw
      `mx-auto max-w-screen-lg flex flex-col gap-5 items-center justify-start pt-8 mb-3
      sm:(gap-8 flex-row)`,
    copyright: tw`text(gray-600 center) pb-6`,
  };

  return (
    <footer class={styles.footer}>
      <div class={styles.inner}>
        {LINKS.map((link) => (
          <a href={link.href} class={styles.link}>{link.title}</a>
        ))}
      </div>
      <div class={styles.copyright}>
        <span>
          © {new Date().getFullYear()} Made by{" "}
          <a class={styles.link} href="https://twitter.com/jrlgs">
            Jorge Romero
          </a>
        </span>
      </div>
    </footer>
  );
}

const LINKS = [
  {
    title: "Source",
    href: "https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno",
  },
  {
    title: "License",
    href:
      "https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno/blob/main/LICENSE",
  },
  {
    title: "Dev Log on my blog",
    href: "https://blog.jrlgs.dev/toying-with-deno-making-a-game-engine",
  },
  {
    title: "Twitter @jrlgs",
    href: "https://twitter.com/jrlgs",
  },
];
