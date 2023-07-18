import "@styles/globals.css";

export const metadata = {
  title: "promptopia",
  description: "Discover & Share AI Prompts",
};

export default ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
