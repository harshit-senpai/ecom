"use client";

import { Heading } from "@/components/heading";
import { columns, OrderColumn } from "./Columns";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/DataTable";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
