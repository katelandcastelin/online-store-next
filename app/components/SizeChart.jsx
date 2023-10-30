import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th, td {
    border: 1px solid black;
    text-align: center;
    padding: 10px;
  }
  th {
    background-color: #f2f2f2;
  }
`;

export default function SizeChart() {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Bust</th>
          <th>Waist</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>XS</td>
          <td>73 - 79</td>
          <td>55 - 61</td>
        </tr>
        <tr>
          <td>S</td>
          <td>79 - 85</td>
          <td>61 - 67</td>
        </tr>
        <tr>
          <td>M</td>
          <td>85 - 91</td>
          <td>67 - 73</td>
        </tr>
        <tr>
          <td>L</td>
          <td>91 - 97</td>
          <td>73 - 79</td>
        </tr>
        <tr>
          <td>XL</td>
          <td>97 - 103</td>
          <td>79 - 85</td>
        </tr>
      </tbody>
    </Table>
  );
};