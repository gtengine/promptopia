"use client";

import { SessionProvider } from "next-auth/react";

export default ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
