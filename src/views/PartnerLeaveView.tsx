import { userPartnerLeaveViewModel } from "../viewmodels/userPartnerLeaveViewModels";

export default function PartnerLeaveView() {
  const vm = userPartnerLeaveViewModel();

  if (vm.loading) {
    return <div>Loading...</div>;
  }

  if (vm.error) {
    return <div>Error: {vm.error}</div>;
  }

  return (
    <div>
      <h2>Partner Leave List</h2>
      {vm.data.length === 0 && <p>Data kosong</p>}

      <ul>
        {vm.data.map((item) => (
          <li key={item.id}>
            {item.name}
            <br />
            <small>{item.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
