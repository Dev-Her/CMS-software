interface StatCardProps {
  title: string;
  value: number;
  icon: string;
  color?: "blue" | "green" | "orange" | "red";
  stat?: string;
  statTone?: "increase" | "neutral" | "warning";
}

function StatCard({
  title,
  value,
  icon,
  color = "blue",
  stat,
  statTone = "neutral",
}: StatCardProps) {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-icon">
        <i className={icon} aria-hidden="true"></i>
      </div>

      <div className="stat-card-content">
        <p className="stat-title">{title}</p>

        <h2 className="stat-value">{value}</h2>

        {stat && (
          <p className={`stat-change stat-change-${statTone}`}>
            {statTone === "increase" && (
              <i className="fa-solid fa-arrow-trend-up" aria-hidden="true"></i>
            )}
            {statTone === "warning" && (
              <i className="fa-regular fa-clock" aria-hidden="true"></i>
            )}
            {stat}
          </p>
        )}
      </div>
    </div>
  );
}

export default StatCard;
