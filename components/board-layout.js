export function BoardLayout({  menu, footer, children }) {
  return (
    <div className="board-layout">
      <header className="header">
        <h3>memory</h3>
        {menu}
      </header>
      <main className="body">{children}</main>
      <footer className="footer">{footer}</footer>

      <style jsx>{`
        .board-layout {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: grid;
          grid-template-rows: auto 1fr auto;
        }

        .header {
          padding: 18px 18px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer {
          padding: 10px 18px;
          padding-bottom: 15px;
          background: white;
        }
      `}</style>
    </div>
  );
}
