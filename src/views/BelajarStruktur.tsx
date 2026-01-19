import "./belajar.css";
export default function BelajarStruktur() {
  return (
    <div className="belajar-struktur">
      <header className="header">
        <h1>Belajar Struktur Komponen di React</h1>
      </header>

      <main>
        <section>
          <div className="card-tabel">
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th> Nama</th>
                  <th> Email</th>
                  <th> Phone</th>
                  <th> Address</th>
                  <th> Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>123-456-7890</td>
                  <td>123 Main St</td>
                  <td>Male</td>
                </tr>
                <tr className="table-row">
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>123-456-7890</td>
                  <td>123 Main St</td>
                  <td>Male</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="card-section">
          <div className="card-payment">
            <div className="card-title">
              <h3>Pilihan pembayaran</h3>
              <p className="card-description">
                Silahkan melakukan pembayaran sebelum jatuh tempo
              </p>
            </div>
          </div>
          <div className="card-methods">
            <div className="card-method">💳 Kartu Kredit</div>
            <div className="card-method">🏦 Transfer Bank</div>
            <div className="card-method">📱 E-Wallet</div>
          </div>
          <div className="card-total">
            <span>Total Pembayaran:</span> <strong>Rp 1.500.000</strong>
          </div>
        </section>
      </main>
    </div>
  );
}
