const mainLinks = [
  { title: "Home", href: "/", icon: "fa-solid fa-house" },
  { title: "Clients", href: "/clients", icon: "fa-solid fa-user-group" },
  { title: "Leads", href: "/leads", icon: "fa-solid fa-bullseye" },
  { title: "Appointments", href: "/appointments", icon: "fa-regular fa-calendar" },
  { title: "Tasks", href: "/tasks", icon: "fa-regular fa-clipboard" },
  { title: "Invoices", href: "/invoices", icon: "fa-solid fa-file-invoice-dollar" },
  { title: "Notes", href: "/notes", icon: "fa-regular fa-note-sticky" },
  { title: "Reports", href: "/reports", icon: "fa-solid fa-chart-line" },
];

const settingsLink = {
  title: "Settings",
  href: "/settings",
  icon: "fa-solid fa-gear",
};

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">
        <span className="logo-mark" aria-hidden="true">
          <svg viewBox="0 0 42 24" role="img">
            <path d="M2 12h7l4-6 5 13 6-17 5 10h11" />
            <circle cx="21" cy="12" r="2.5" />
          </svg>
        </span>
        <span>Pulse</span>
      </h1>

      <nav className="nav">
        {mainLinks.map((link) => (
          <a className="nav__link" href={link.href} key={link.title}>
            <i className={link.icon} aria-hidden="true"></i>
            <span>{link.title}</span>
          </a>
        ))}

        <div className="nav__divider" aria-hidden="true"></div>

        <a className="nav__link" href={settingsLink.href}>
          <i className={settingsLink.icon} aria-hidden="true"></i>
          <span>{settingsLink.title}</span>
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
