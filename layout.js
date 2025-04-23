export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Budget Tracker</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
