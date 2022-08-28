import React from "react";

import Link from "next/link";

import { ApplicationLayout } from "@/components/Layout/Application";
import { ROUTE_PATH } from "@/config";

/**
 * Location
 * @constructor
 */
export default function Location() {
  return (
    <ApplicationLayout>
      <Link href={ROUTE_PATH.HOME}>HOME</Link>

      <Link href={ROUTE_PATH.ITEMS_DETAIL_SLUG}>Item</Link>
    </ApplicationLayout>
  );
}
