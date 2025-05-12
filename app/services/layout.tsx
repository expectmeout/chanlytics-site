import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Chanlytics",
  description: "Managed VA operations, performance advertising & beyond.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
