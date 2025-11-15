import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { HeaderProfileMin } from "@/components/header-profile-min";
import { Newsletter } from "@/components/newsletter";
import { Section } from "@/components/section";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <HeaderProfileMin />

      {children}

      {/* Newsletter */}
      <Section>
        <Newsletter />
      </Section>

      <Footer />
    </Container>
  );
}
