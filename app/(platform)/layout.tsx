import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      {children}
      <Toaster richColors />
    </ClerkProvider>
  );
}
