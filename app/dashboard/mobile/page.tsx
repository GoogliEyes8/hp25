import { SidebarTrigger } from "@/components/ui/sidebar"
import { columns, Mobile } from "./columns"
import { DataTable } from "./data-table"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

async function getData(): Promise<Mobile[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      mobile_name: "iPhone 14 Pro",
      reload_date: "2023-10-01",
      next_reload_date: "2023-11-01",
      reload_amount: 50000,
      balance: 100000,
    },
    {
      id: "a1b2c3d4",
      mobile_name: "Samsung Galaxy S23",
      reload_date: "2023-09-15",
      next_reload_date: "2023-10-15",
      reload_amount: 40000,
      balance: 80000,
    },
    {
      id: "e5f6g7h8",
      mobile_name: "Google Pixel 7",
      reload_date: "2023-08-20",
      next_reload_date: "2023-09-20",
      reload_amount: 35000,
      balance: 60000,
    },
    {
      id: "i9j0k1l2",
      mobile_name: "OnePlus 11",
      reload_date: "2023-07-10",
      next_reload_date: "2023-08-10",
      reload_amount: 30000,
      balance: 50000,
    },
    {
      id: "m3n4o5p6",
      mobile_name: "Xiaomi 13 Pro",
      reload_date: "2023-06-05",
      next_reload_date: "2023-07-05",
      reload_amount: 25000,
      balance: 40000,
    },

  ]
}

export default async function MobilePage() {
  const data = await getData()

  return (
    <div className="p-4">
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <DataTable columns={columns} data={data} />
    </div>
  )
}