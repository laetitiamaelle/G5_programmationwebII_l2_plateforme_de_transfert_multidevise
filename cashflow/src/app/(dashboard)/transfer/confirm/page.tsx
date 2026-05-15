"use client";

import { useRouter } from "next/navigation";
import { TransferConfirmPage } from "@/views/TransferConfirmPage";
import { usePushToast } from "@/contexts/ToastContext";

export default function TransferConfirmRoute() {
  const router = useRouter();
  const pushToast = usePushToast();

  return (
    <TransferConfirmPage
      onConfirm={() => {
        pushToast({
          type: "success",
          title: "Transfert confirmé",
          message: "Votre transfert a été accepté et sera traité sous peu.",
        });
        router.push("/transfer/success");
      }}
      onEdit={() => router.push("/transfer")}
    />
  );
}
