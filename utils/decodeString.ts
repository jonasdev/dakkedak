const htmlEntityPattern = /&[\w#]+;/g;

const htmlEntities: { [key: string]: string } = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&#39;": "'",
  // Add more entities if needed
};

const urlEncodingPattern = /%[0-9A-Fa-f]{2}/g;

const variousReplaceMap: { [key: string]: string } = {
  "â": '"', // Left quotation mark
  "â": '"', // Right quotation mark
  "Â®": "®",
  "â¢": "™",
  "Â": "", // Question mark
  "â": "‘",
  "â": "´",
  "Ã¯": "ï",
  "rÂ®": "r®",
  "Ã": "É",
};

export default function decodeString(string: string): string {
  let stringToReturn = string;

  if (htmlEntityPattern.test(string)) {
    return string.replace(htmlEntityPattern, (entity) => {
      return htmlEntities[entity] || entity;
    });
  }

  if (urlEncodingPattern.test(string))
    stringToReturn = decodeURIComponent(stringToReturn);

  const regex = new RegExp(Object.keys(variousReplaceMap).join("|"), "g");
  stringToReturn = stringToReturn.replace(
    regex,
    (match) => variousReplaceMap[match]
  );

  return stringToReturn;
}
