import { tw } from "$twind";

// This hook is intended to let you implement global styles
// as well as a function for overriding and adding your own,
// per component.

export function useStyles() {
  const styles = {
    headerText: tw`text-2xl text-black font-serif font-bold`,
    bodyText: tw`font-sans text-blue-500 font-light text-base`,
  };

  const setStyles = (
    currentStyles: typeof styles,
    newStyles: Record<string, string>,
  ) => {
    return { ...currentStyles, newStyles };
  };

  return { styles, setStyles };
}
