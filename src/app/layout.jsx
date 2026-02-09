import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../../public/Inter-VariableFont_opsz,wght.ttf",
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
  description: "Therapy for anxiety, trauma, and burnout. Licensed clinical psychologist offering in-person and telehealth sessions in Santa Monica, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
