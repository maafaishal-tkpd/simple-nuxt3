export function useUtilities() {
  function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt: string) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return {
    toTitleCase,
  };
}
