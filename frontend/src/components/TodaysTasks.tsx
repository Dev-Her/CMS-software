function TodaysTasks() {
  return (
    <section className="appointment__card">
      <div className="appointment__header">
        <h2 className="appointment__title">Today's Tasks</h2>

        <a href="/appointments" className="appointment__view-all">
          View all
        </a>
      </div>

      <div className="appointment__list">
        <div className="appointment__row">
          <div className="appointment__date">
            <span>July</span>
            <strong>11</strong>
          </div>

          <div className="appointment__info">
            <strong>10:00 AM</strong>
            <p>Meeting with John Smith</p>
          </div>

          <p className="appointment__type appointment__type--consultation">
            Consultation
          </p>
        </div>
        <div className="appointment__row">
          <div className="appointment__date">
            <span>July</span>
            <strong>14</strong>
          </div>

          <div className="appointment__info">
            <strong>2:35 PM</strong>
            <p>Meeting with Janice Richmond</p>
          </div>

          <p className="appointment__type appointment__type--follow-up">
            Follow Up
          </p>
        </div>
        <div className="appointment__row">
          <div className="appointment__date">
            <span>July</span>
            <strong>21</strong>
          </div>

          <div className="appointment__info">
            <strong>12:30 PM</strong>
            <p>Meeting with Victor Riley</p>
          </div>

          <p className="appointment__type appointment__type--service">
            Service
          </p>
        </div>
        <div className="appointment__row">
          <div className="appointment__date">
            <span>Aug</span>
            <strong>3</strong>
          </div>

          <div className="appointment__info">
            <strong>11:45 PM</strong>
            <p>Meeting with Victor Riley</p>
          </div>

          <p className="appointment__type appointment__type--consultation">
            Consultation
          </p>
        </div>
      </div>
    </section>
  );
}

export default TodaysTasks;
