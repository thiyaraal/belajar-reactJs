import { userPartnerLeaveViewModel } from "../viewmodels/userPartnerLeaveViewModels";
import "./card.css";

export default function BelajarWudget() {
  const vm = userPartnerLeaveViewModel();

  if (vm.loading) {
    return <div>Loading...</div>;
  }

  if (vm.error) {
    return <div>Error: {vm.error}</div>;
  }

  return (
    <div>
      <h1> Contoh table saya sendir</h1>
      <section>
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th> Nama</th>
              <th> Email</th>
              <th> Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>thiyara</td>
              <td>thiyara@gmail.com</td>
              <td>1234567</td>
            </tr>
            <tr>
              <td>ica</td>
              <td>ica@gmail.com</td>
              <td>0986443</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <div className="card">
          <div className="card-icon">⚡</div>
          <div className="card-content">
            <h3 className="card-title"> Ini adalah card pertama saya</h3>
            <p className="card-description">
              We provide innovative solutipns tat meet pur clients, golas. Our
              Team of experts is dedicated to your success.
            </p>
          </div>
        </div>
      </section>
    </div>
    // <div>
    //   <h2>Partner Leave List</h2>
    //   {vm.data.length === 0 && <p>Data kosong</p>}

    //   <ul>
    //     {vm.data.map((item) => (
    //       <li key={item.id}>
    //         {item.name}
    //         <br />
    //         <small>{item.email}</small>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
