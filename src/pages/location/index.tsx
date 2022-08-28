import React from "react";

import Link from "next/link";

import { ApplicationLayout } from "@/components/Layout/Application";
import { ROUTE_PATH } from "@/config";

/**
 * Location
 * @constructor
 */
const Location = () => {
  return (
    <ApplicationLayout>
      <Link href={ROUTE_PATH.HOME}>HOME</Link>

      <Link href={ROUTE_PATH.LOCATION_DETAIL_SLUG}>Item</Link>
    </ApplicationLayout>
  );
};
