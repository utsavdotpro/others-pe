import { useIonRouter } from "@ionic/react";

const useRouter = () => {
  const { push, ...rest } = useIonRouter();

  return {
    push,
    pushBackward: (pathname: string) => push(pathname, "back"),
    pushUnmount: (pathname: string) =>
      push(pathname, undefined, undefined, {
        unmount: true,
      }),
    replace: (pathname: string) => push(pathname, undefined, "replace"),
    replaceBackward: (pathname: string) => push(pathname, "back", "replace"),
    ...rest,
  };
};

export default useRouter;
