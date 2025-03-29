import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = '/api/mocks';

const MockList = () => {
  const [mocks, setMocks] = useState([]);

  const fetchMocks = async () => {
    const res = await axios.get(API_URL);
    setMocks(res.data);
  };

  const deleteMock = async (id) => {
    if (!window.confirm('Are you sure you want to delete this mock?')) return;
    await axios.delete(`${API_URL}/${id}`);
    fetchMocks();
  };

  useEffect(() => {
    fetchMocks();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl mb-4">Mocks List</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">URI</th>
            <th className="border p-2">Method</th>
            <th className="border p-2">Response</th>
            <th className="border p-2">Status Code</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mocks.map(mock => (
            <tr key={mock.id}>
              <td className="border p-2">{mock.id}</td>
              <td className="border p-2">{mock.uri}</td>
              <td className="border p-2">{mock.method}</td>
              <td className="border p-2">{mock.response}</td>
              <td className="border p-2">{mock.statusCode}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => deleteMock(mock.id)}
                >
                  Delete
                </button>
                {/* �ожем добави�� кнопк� Edit */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MockList;
