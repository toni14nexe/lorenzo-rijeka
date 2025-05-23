function truncateText(text, maxLength) {
  if (text.length > maxLength) return `${text.slice(0, maxLength)}...`;
  return text;
}

export { truncateText as t };
//# sourceMappingURL=truncate-BSRTn-4H.mjs.map
