function NewClients() {
  return (
    <section className="appointment__card client__card">
      <div className="appointment__header">
        <h2 className="appointment__title">New Clients</h2>

        <a href="/clients" className="appointment__view-all">
          View all
        </a>
      </div>

      <div className="appointment__list">
        <div className="appointment__row">
          <div className="client__avatar" aria-hidden="true">
            <i className="fa-regular fa-user"></i>
          </div>

          <div className="appointment__info">
            <strong>John Smith</strong>
            <p>john.smith@email.com</p>
          </div>

          <p className="client__status client__status--active">Active</p>
        </div>

        <div className="appointment__row">
          <div className="client__avatar" aria-hidden="true">
            <i className="fa-regular fa-user"></i>
          </div>

          <div className="appointment__info">
            <strong>Janice Richmond</strong>
            <p>janice.richmond@email.com</p>
          </div>

          <p className="client__status client__status--lead">Lead</p>
        </div>

        <div className="appointment__row">
          <div className="client__avatar" aria-hidden="true">
            <i className="fa-regular fa-user"></i>
          </div>

          <div className="appointment__info">
            <strong>Victor Riley</strong>
            <p>victor.riley@email.com</p>
          </div>

          <p className="client__status client__status--inactive">Inactive</p>
        </div>

        <div className="appointment__row">
          <div className="client__avatar" aria-hidden="true">
            <i className="fa-regular fa-user"></i>
          </div>

          <div className="appointment__info">
            <strong>Maria Lopez</strong>
            <p>maria.lopez@email.com</p>
          </div>

          <p className="client__status client__status--active">Active</p>
        </div>
      </div>

      <div className="card__footer">
        <button className="card__new-button" type="button">+ New Client</button>
      </div>
    </section>
  );
}

export default NewClients;
