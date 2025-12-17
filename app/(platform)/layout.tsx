import ModalProvider from "@/components/providers/modal-provider";
import QueryProvider from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <QueryProvider>
        {children}
        <Toaster richColors />
        <ModalProvider />
      </QueryProvider>
    </ClerkProvider>
  );
}
