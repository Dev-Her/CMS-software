const invoices = [
  { number: "INV-1048", client: "John Smith", amount: "$1,250.00", status: "Paid" },
  { number: "INV-1047", client: "Janice Richmond", amount: "$860.00", status: "Pending" },
  { number: "INV-1046", client: "Victor Riley", amount: "$475.00", status: "Overdue" },
  { number: "INV-1045", client: "Maria Lopez", amount: "$920.00", status: "Paid" },
];

function RecentInvoices() {
  return (
    <section className="appointment__card invoice__card">
      <div className="appointment__header">
        <h2 className="appointment__title">Recent Invoices</h2>

        <a href="/invoices" className="appointment__view-all">
          View all
        </a>
      </div>

      <div className="appointment__list">
        {invoices.map((invoice) => (
          <div className="appointment__row" key={invoice.number}>
            <div className="invoice__icon" aria-hidden="true">
              <i className="fa-solid fa-file-invoice-dollar"></i>
            </div>

            <div className="appointment__info">
              <strong>{invoice.number}</strong>
              <p>{invoice.client}</p>
            </div>

            <div className="invoice__summary">
              <strong>{invoice.amount}</strong>
              <span className={`invoice__status invoice__status--${invoice.status.toLowerCase()}`}>
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="card__footer">
        <button className="card__new-button" type="button">+ New Invoice</button>
      </div>
    </section>
  );
}

export default RecentInvoices;
