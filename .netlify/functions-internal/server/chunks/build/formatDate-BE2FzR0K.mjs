function formatISOToDatetime(dateString) {
  const date = new Date(dateString);
  const optionsDate = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Zagreb"
  };
  const formattedDate = new Intl.DateTimeFormat("hr-HR", optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("hr-HR", optionsTime).format(
    date
  );
  return `${formattedDate.replaceAll(" ", "")} u ${formattedTime} sati`;
}

export { formatISOToDatetime as f };
//# sourceMappingURL=formatDate-BE2FzR0K.mjs.map
