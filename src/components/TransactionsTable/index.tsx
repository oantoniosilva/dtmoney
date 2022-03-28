import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">$12.000</td>
            <td>Development</td>
            <td>27/03/2022</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- $1.100</td>
            <td>House</td>
            <td>30/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}