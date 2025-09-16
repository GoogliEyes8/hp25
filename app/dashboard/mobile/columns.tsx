"use client"

import { ColumnDef } from "@tanstack/react-table"
import { formatCurrency, formatDate } from "@/lib/cdman-functions"

export type Mobile = {
  id: string
  mobile_name: string
  reload_date: string
  next_reload_date: string
  reload_amount: number
  balance: number
}

export const columns: ColumnDef<Mobile>[] = [
  {
    accessorKey: "mobile_name",
    header: "Mobile Name",
  },
  {
    accessorKey: "reload_date",
    header: "Reload Date",
    cell: ({ row }) => formatDate(row.original.reload_date),
  },
  {
    accessorKey: "next_reload_date",
    header: "Next Reload Date",
    cell: ({ row }) => formatDate(row.original.next_reload_date),
  },
  {
    accessorKey: "reload_amount",
    header: "Reload Amount",
    cell: ({ row }) => formatCurrency(row.original.reload_amount),
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => formatCurrency(row.original.balance),
  },
]