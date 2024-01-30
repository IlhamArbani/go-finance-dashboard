import { generateDate } from "@/utils/dateUtils";

export const mapTransactions = (data: any[] | undefined) => {
  const result = data ? data.map((item) => (
    {
      id: item.id,
      item: item.name,
      price: item.pantone_value,
      date: item.year,
      status: item.color,
    }
  )) : []

  return result;
}

export const mapDetailTransaction = (data: any) => {
  return {
    name: data.name ?? '',
    price: data.year ?? 0,
    date: generateDate(),
    status: data.color ?? ''
  }
}