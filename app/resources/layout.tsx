import { HeroHeader } from '@/components/header';
import { SiteFooter } from '@/components/site-footer';

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
