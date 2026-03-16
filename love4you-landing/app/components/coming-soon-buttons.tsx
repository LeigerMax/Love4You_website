// app/components/coming-soon-buttons.tsx
"use client";

import { Button } from "./ui/button";
import { Apple, Store } from "lucide-react";

export default function ComingSoonButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full mt-10">
      <Button size="lg" className="gap-2" disabled>
        <Apple className="h-4 w-4" />
        <span>Bientôt sur l'App Store</span>
      </Button>
      <Button variant="outline" size="lg" className="gap-2" disabled>
        <Store className="h-4 w-4" />
        <span>Bientôt sur Google Play</span>
      </Button>
    </div>
  );
}
