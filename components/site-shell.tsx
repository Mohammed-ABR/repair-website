import { PageTransition } from "./page-transition";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { StickyScrollCta } from "./sticky-scroll-cta";
import { TopBar } from "./top-bar";
import { WhatsappFloat } from "./whatsapp-float";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="sticky top-0 z-50">
        <TopBar />
        <SiteHeader />
      </div>
      <main className="min-h-0 flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteFooter />
      <StickyScrollCta />
      <WhatsappFloat />
    </div>
  );
}
