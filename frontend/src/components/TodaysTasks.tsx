function TodaysTasks() {
  return (
    <section className="appointment__card task__card">
      <div className="appointment__header">
        <h2 className="appointment__title">Today's Tasks</h2>

        <a href="/tasks" className="appointment__view-all">
          View all
        </a>
      </div>

      <div className="task__list">
        <label className="task__row">
          <input className="task__checkbox" type="checkbox" />
          <span className="task__name">Send John the project proposal</span>
          <span className="task__due task__due--today">Today</span>
        </label>

        <label className="task__row">
          <input className="task__checkbox" type="checkbox" />
          <span className="task__name">Follow up with Janice</span>
          <span className="task__due">July 14</span>
        </label>

        <label className="task__row">
          <input className="task__checkbox" type="checkbox" />
          <span className="task__name">Prepare notes for the team meeting</span>
          <span className="task__due task__due--today">Today</span>
        </label>

        <label className="task__row">
          <input className="task__checkbox" type="checkbox" />
          <span className="task__name">Review Victor's service request</span>
          <span className="task__due">July 21</span>
        </label>
      </div>

      <div className="card__footer">
        <button className="card__new-button" type="button">+ New Task</button>
      </div>
    </section>
  );
}

export default TodaysTasks;
