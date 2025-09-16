export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
    trailingZeroDisplay: "stripIfInteger",
  }).format(amount); // Assuming amounts are stored in cents
};

export const formatDate = (date: Date | string) => {
  if (!date) return "N/A";

  const d = new Date(date);

  // Format date parts
  const day = d.toLocaleDateString("en-ID", { day: "2-digit" });
  const month = d.toLocaleDateString("en-ID", { month: "2-digit" });
  const year = d.toLocaleDateString("en-ID", { year: "numeric" });

  // Format weekday
  const weekday = d.toLocaleDateString("en-ID", { weekday: "long" });

  // return new Date(date).toLocaleDateString("en-ID", {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  //   weekday: "long"
  // }).replace(/\//g, "-");

  return `${day}-${month}-${year} (${weekday})`;
};
