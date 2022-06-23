/** @jsx h */
/**@jsxFrag Fragment */

import {
  Fragment,
  h} from "preact"
import  {
  useEffect,
  useRef,
} from "preact/hooks";


import {Head} from "$fresh/runtime.ts"
import { tw } from "twind";
import { animation, css } from "$twind/css";

import useGlobalStyles from "/hooks/useGlobalStyles.ts";

import Footer from "/components/Footer.tsx";
// import HeroSection from "$root/components/HeroSection.tsx";
// import GetStarted from "$root/components/GetStarted.tsx";

import Code from "/components/atoms/Code.tsx";
import Paragraph from "/components/atoms/Paragraph.tsx";
import Header from "/components/atoms/Header.tsx";
import WarningText from "/components/atoms/WarningText.tsx";

import Demo3D from "/islands/Demo3D.tsx";

const logo = "/birb-logo.png";
const TITLE = "Birb Engine - 3D desktop apps with Deno";
const DESCRIPTION =
  "Build 3D games and apps on the desktop with Deno, Three.js and the Webview library!";

export default function Home(props: PageProps) {
  const styles = {
    mainContainer: tw`flex flex-col w-full h-[100vh] overflow-hidden relative`,
    bgCover: tw`w-full h-full -z-[1] bg-black absolute
  ${
      animation("3s ease-out forwards", {
        "0%": {
          opacity: "100%",
        },
        "50%": {
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      })
    }`,
  };

  const listenerRef = useRef(null!);

  useEffect(() => {
    // add listeners here.

    // as if "componentDidMount()"
  }, []);

  return (
    <>
      <Head>
        <title>Birb Engine</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
      </Head>
      {/* We will have the root main listen for mouse events. and send the handler down to the canvas. No context though. It won't work as expected. */}
      <main ref={listenerRef} class={styles.mainContainer}>
        <div id="bgCover" class={styles.bgCover}></div>
        <Demo3D />
        <Navbar height={10} />
        <HeroSection height={80} />
        <LearnMore height={10} />
      </main>
      {/* Optional TODO: We may want to have the rest of the page wrapped into another element and set it's height to 100vh or so, so we can add a nice "smooth scroll" transition when clicking "learn more". And avoid having an ugly chunk of the landing page sticking from the top.*/}
      {/* another idea is to add a "distortion effect" transition similar to monokai's website:  https://monokai.nl/ */}
      <HowItWorks />
      <GetStarted />
      <Footer />
    </>
  );
}

interface heightProp {
  height: number;
}

function Navbar({ height }: heightProp) {
  const styles = {
    nav: tw`flex justify-end items-center h-[${height}vh]`,
    docButton: tw
      `border(2 black) inline-flex items-center min-h-[2.5rem] max-h-[5rem] px-4 m-4 bg-transparent rounded-[0.7rem] shadow-md
      
      hover:(bg-blue-100 text-gray-700 border-gray-500 shadow-inner ) transition-all duration-300`,
  };
  return (
    <nav class={styles.nav}>
      <a href="/docs" class={styles.docButton}>Documentation</a>
    </nav>
  );
}

function HowItWorks() {
  // To Do
  return <></>;
}

function HeroSection({ height }: heightProp) {
  const styles = {
    heroContainer: tw` flex flex-col items-center h-[${height}vh]
      xl:(flex-row justify-center)`,
    titleBox: tw`flex flex-col flex-1 justify-center items-center max-w-[90vw]
      lg:(max-w-[70vw])`,
    title: tw`font-extrabold max-w-[80vw] text-white text-center
    text-[3rem]
    md:(text-[5rem])
    lg:(text-[7rem])`,
    subtitle: tw`font-normal text-white pt-5 text-center
    text-[1.5rem]
    lg:( text-[2rem])`,
  };

  return (
    <section class={styles.heroContainer}>
      <header class={styles.titleBox}>
        <h1 class={styles.title}>Make 3D desktop apps with Deno</h1>
        <h2 class={styles.subtitle}>
          Or any app using web technologies...
        </h2>
      </header>
    </section>
  );
}

function LearnMore({ height }: heightProp) {
  const styles = {
    moreContainer: tw`flex justify-center items-center h-[${height}vh]`,
    moreText: tw`text-gray-200 text-3xl`,
  };
  return (
    <section class={styles.moreContainer}>
      <p class={styles.moreText}>
        Learn more!
      </p>
    </section>
  );
}

function GetStarted() {
  const styles = {
    ...useGlobalStyles(),
    container: tw`max-w-2xl mx-7 sm:(mx-auto) mb-10 pt-8`,
  };

  return (
    <div class={styles.container}>
      <WarningText>
        You shouldn't use this project for production. As I cannot guarantee it
        won't break!
      </WarningText>
      <Header spacer>How to get started</Header>
      <Paragraph>
        Make sure you have the <a class={styles.link}>Deno CLI</a>{" "}
        installed. Version 1.22.3 or higher. Once you do, just clone{" "}
        <a
          class={styles.link}
          href="https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno"
        >
          the repo
        </a>:
      </Paragraph>
      <Code>
        git clone https://github.com/JorchRL/Birb-Engine-Desktop3D-with-Deno
      </Code>
      <Paragraph>
        There are several deno task available. To run the app use:
      </Paragraph>
      <Code>$ deno task start</Code>
      <Header spacer>Basic usage</Header>
      <Paragraph>
        You should build your app inside{" "}
        <span class={styles.inlineCodeText}>/src</span> where{" "}
        <span class={styles.inlineCodeText}>/index.ts</span>{" "}
        is the entry point. All your dependencies should go inside{" "}
        <span class={styles.inlineCodeText}>/src/appDeps.ts</span>
      </Paragraph>
      <Paragraph>To build the app use</Paragraph>
      <Code>$ deno task build</Code>
      <Paragraph>
        Make sure to check other available tasks, or make your own!
      </Paragraph>
    </div>
  );
}