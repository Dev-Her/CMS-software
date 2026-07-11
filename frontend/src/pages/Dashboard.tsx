import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/Statcard";

function Dashboard() {
  return (
    <DashboardLayout>
      <section className="dashboard__header">
        <p className="dashboard__title">Welcome to PulseCMS !</p>
        <p className="dashboard__subtitle">See what's going on with your business today!</p>
      </section>

      <section className="stats-grid">
        <StatCard title="Clients" value={120} icon="fa-solid fa-users" color="blue" stat="14% this month" statTone="increase" />
        <StatCard title="Appointments" value={32} icon="fa-regular fa-calendar" color="green" stat="This week" />
        <StatCard title="Tasks" value={12} icon="fa-regular fa-clipboard" color="orange" stat="3 due today" statTone="warning" />
        <StatCard title="Leads" value={14} icon="fa-solid fa-bullseye" color="red" stat="2 new this week" />
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;
