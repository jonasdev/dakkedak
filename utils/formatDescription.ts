const replaceMap: { [key: string]: string } = {
  "â": '"', // Left quotation mark
  "â": '"', // Right quotation mark
};

export default function formatDescription(description: string) {
  const regex = new RegExp(Object.keys(replaceMap).join("|"), "g");
  const replacedString = description.replace(
    regex,
    (match) => replaceMap[match]
  );

  const lastDotIndex = replacedString.lastIndexOf(".");
  if (lastDotIndex !== -1) {
    return replacedString.substring(0, lastDotIndex) + ".";
  }

  return replacedString;
}
