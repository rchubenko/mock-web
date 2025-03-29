import React, { useState } from 'react';
import axios from 'axios';

const API_URL = '/api/mocks';

const MockForm = () => {
  const [form, setForm] = useState({
    uri: '',
    method: '',
    response: '',
    statusCode: 200,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, form);
    alert('Mock created!');
    setForm({ uri: '', method: '', response: '', statusCode: 200 });
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl mb-4">Create New Mock</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          className="border p-2"
          type="text"
          name="uri"
          value={form.uri}
          onChange={handleChange}
          placeholder="URI"
          required
        />
        <input
          className="border p-2"
          type="text"
          name="method"
          value={form.method}
          onChange={handleChange}
          placeholder="Method (GET, POST, etc.)"
          required
        />
        <textarea
          className="border p-2"
          name="response"
          value={form.response}
          onChange={handleChange}
          placeholder="Response (JSON string)"
          required
        />
        <input
          className="border p-2"
          type="number"
          name="statusCode"
          value={form.statusCode}
          onChange={handleChange}
          placeholder="Status Code"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Mock
        </button>
      </form>
    </div>
  );
};

export default MockForm;
