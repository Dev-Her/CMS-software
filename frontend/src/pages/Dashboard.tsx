import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import UpcomingAppointments from "../components/UpcomingAppointments";
import TodaysTasks from "../components/TodaysTasks";
import NewClients from "../components/NewClients";
import RecentInvoices from "../components/RecentInvoices";

function Dashboard() { 
  return (
    <DashboardLayout>
      <header className="dashboard__header">
        <div className="dashboard__titles">
          <h1 className="dashboard__title">Welcome to Pulse👋</h1>
          <p className="dashboard__subtitle">
            See what's going on with your business today!
          </p>
        </div>

        <div className="right__nav__list">
          <button className="create__btn">+ New</button>
          <input
            type="search"
            placeholder="Search..."
            className="search__bar"
          />
          <i className="fa-regular fa-bell" aria-hidden="true"></i>
          <i className="fa-regular fa-user" aria-hidden="true"></i>
        </div>
      </header>

      <section
        className="dashboard__section"
        aria-labelledby="overview-heading"
      >
        <h2 id="overview-heading" className="visually-hidden">
          Business overview
        </h2>
        <div className="stats-grid">
          <StatCard
            title="Clients"
            value={120}
            icon="fa-solid fa-users"
            color="blue"
            stat="14% this month"
            statTone="increase"
          />
          <StatCard
            title="Appointments"
            value={32}
            icon="fa-regular fa-calendar"
            color="green"
            stat="This week"
          />
          <StatCard
            title="Tasks"
            value={12}
            icon="fa-regular fa-clipboard"
            color="orange"
            stat="3 due today"
            statTone="warning"
          />
          <StatCard
            title="Leads"
            value={14}
            icon="fa-solid fa-bullseye"
            color="red"
            stat="2 new this week"
          />
        </div>
      </section>

      <div className="dashboard__grid">
        <UpcomingAppointments />
        <NewClients />
        <TodaysTasks />
        <RecentInvoices />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
