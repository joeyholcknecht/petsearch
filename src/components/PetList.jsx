function PetList({ pets, search, setSearch }) {
  return (
    <div>
      <h2 className="text-center mb-3">Search my favorite animals</h2>

      <input
        type="text"
        className="form-control form-control-lg mx-auto mb-4 search-box"
        placeholder="Type an animal or name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Specialty</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>
                <img src={pet.image} alt={pet.animal} className="img-thumbnail pet-img" />
              </td>
              <td>{pet.name}</td>
              <td>{pet.specialty}</td>
            </tr>
          ))}
          {pets.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center">No pets found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PetList;
