import './globals.css';
import NavBar from './components/NavBar';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body className="bg-white dark:bg-black dark:text-white">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <NavBar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
