import Link from "next/link";
import { ANDROID_APK_URL } from "@/src/constants";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  size?: "default" | "large";
  className?: string;
}

export function DownloadButton({
  size = "default",
  className = "",
}: Readonly<DownloadButtonProps>) {
  const sizeClasses =
    size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";

  return (
    <Link
      href={ANDROID_APK_URL}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-sm font-semibold text-white shadow-[0_0_24px_rgba(244,63,94,0.45)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${sizeClasses} ${className}`}
    >
      <Download className="mr-2 h-4 w-4" />
      <span>Télécharger l&apos;APK Android</span>
    </Link>
  );
}

