export const mapTransactions = (data: any[]) => {
  const result = data.map((item) => (
    {
      id: item.id,
      item: item.name,
      price: item.pantone_value,
      date: item.year,
      status: item.color,
    }
  ))

  return result;
}