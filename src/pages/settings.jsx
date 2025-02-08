import { useState } from "react";
import React from "react";

export default function ProfileSettings() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: false,
    smsNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <h3 className="text-lg font-semibold mt-6">Change Password</h3>
        <div className="mb-4">
          <label className="block">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
          />
        </div>
        <h3 className="text-lg font-semibold mt-6">Notification Preferences</h3>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="emailNotifications"
              checked={formData.emailNotifications}
              onChange={handleChange}
              className="mr-2"
            />
            Email Notifications
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="smsNotifications"
              checked={formData.smsNotifications}
              onChange={handleChange}
              className="mr-2"
            />
            SMS Notifications
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
