import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import UpcomingAppointments from "../components/UpcomingAppointments";
import TodaysTasks from "../components/TodaysTasks";

function Dashboard() {
  return (
    <DashboardLayout>
      <header className="dashboard__header">
        <h1 className="dashboard__title">Welcome to PulseCMS!</h1>
        <p className="dashboard__subtitle">See what's going on with your business today!</p>
      </header>

      <section className="dashboard__section" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="visually-hidden">Business overview</h2>
        <div className="stats-grid">
          <StatCard title="Clients" value={120} icon="fa-solid fa-users" color="blue" stat="14% this month" statTone="increase" />
          <StatCard title="Appointments" value={32} icon="fa-regular fa-calendar" color="green" stat="This week" />
          <StatCard title="Tasks" value={12} icon="fa-regular fa-clipboard" color="orange" stat="3 due today" statTone="warning" />
          <StatCard title="Leads" value={14} icon="fa-solid fa-bullseye" color="red" stat="2 new this week" />
        </div>
      </section>

      <UpcomingAppointments />

      <TodaysTasks />
    </DashboardLayout>
  );
}

export default Dashboard;
