import { tw } from "$twind";

/**
 * This "hook" is intended to let you implement global styles you can use easily. Add your own by editing the definition.
 *
 * As well as adding styles per component. ie by doing a "mixin":
 *
 * @example
 * export default YourComponent () {
 *    const styles = {
 *      ...useGlobalStyles(),
 *      someOtherStyle: tw`some-twind-utility`
 *    }
 *    return (...)
 * }
 */
export default function useGlobalStyle() {
  const globalStyles = {
    headerText: tw`text-2xl text-black font-bold pb-2`,
    bodyText: tw`font-sans text-gray-900 text-base pb-2 pt-4 leading-10`,
    codeText: tw
      `font-mono bg-gray-800 text-white pt-4 pb-3 px-8 rounded-xl select-all`,
    inlineCodeText: tw
      `bg-gray-500 text-white font-mono rounded-md px-2 pt-0.5 align-middle `,
    link: tw`text-green-800 border-b-2 border-gray-50 cursor-pointer
      hover:(border-b-2 border-green-800) 
      transition-[border-color] duration-300`,
    gWarningText: tw
      `bg-yellow-50 text-base pb-3 pt-4 px-8 pr-10 rounded flex items-center border-tb-2 border-yellow-300 my-4`,
  };

  return globalStyles;
}
