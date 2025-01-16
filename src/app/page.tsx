"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import "tailwindcss/tailwind.css";

interface FormData {
  agreementDate: string;
  agreementAmount: string;
  duration: string;
  extensionPeriod?: string;
  extensionAmount?: string;
  propertyLocation: string;
  sellerSign: string;
  signedBy: string;
  sellerName: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    agreementDate: "",
    agreementAmount: "",
    duration: "",
    extensionPeriod: "",
    extensionAmount: "",
    propertyLocation: "",
    sellerSign: "",
    signedBy: "",
    sellerName: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/agreements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // if (!response.ok) {
      //   throw new Error(`Error submitting form: ${response.statusText}`);
      // }

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error message from server:", errorMessage);
        alert("Failed to submit form. Please try again.");
      }

      console.log("Form submitted successfully!");
      setFormData({
        agreementDate: "",
        agreementAmount: "",
        duration: "",
        extensionPeriod: "",
        extensionAmount: "",
        propertyLocation: "",
        sellerSign: "",
        signedBy: "",
        sellerName: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Property Lease Form
        </h2>

        <div className="mb-4">
          <label
            htmlFor="sellerName"
            className="block text-sm font-medium text-gray-700"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleChange}
            className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="propertyLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Property Location
          </label>
          <input
            type="text"
            id="propertyLocation"
            name="propertyLocation"
            value={formData.propertyLocation}
            onChange={handleChange}
            className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-row justify-between gap-8">
          <div className="mb-4 w-[50%]">
            <label
              htmlFor="agreementDate"
              className="block text-sm font-medium text-gray-700"
            >
              Agreement Date
            </label>
            <input
              type="date"
              id="agreementDate"
              name="agreementDate"
              value={formData.agreementDate}
              onChange={handleChange}
              className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4 w-[50%]">
            <label
              htmlFor="agreementAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Agreement Amount ($)
            </label>
            <input
              type="number"
              id="agreementAmount"
              name="agreementAmount"
              value={formData.agreementAmount}
              onChange={handleChange}
              className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration of Agreement
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g., 12 months"
            className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="extensionPeriod"
            className="block text-sm font-medium text-gray-700"
          >
            Optional Extension Period
          </label>
          <input
            type="text"
            id="extensionPeriod"
            name="extensionPeriod"
            value={formData.extensionPeriod}
            onChange={handleChange}
            placeholder="e.g., 6 months"
            className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="extensionAmount"
            className="block text-sm font-medium text-gray-700"
          >
            Optional Extension Amount/Fee ($)
          </label>
          <input
            type="number"
            id="extensionAmount"
            name="extensionAmount"
            value={formData.extensionAmount}
            onChange={handleChange}
            className="mt-1 block text-gray-500 w-full h-8 border-gray-500 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-row justify-between gap-8">
          <div className="mb-4 w-[50%]">
            <label
              htmlFor="sellerSign"
              className="block text-sm font-medium text-gray-700"
            >
              Seller Sign
            </label>
            <input
              type="text"
              id="sellerSign"
              name="sellerSign"
              value={formData.sellerSign}
              onChange={handleChange}
              className="mt-1 block text-gray-500 w-full h-8 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="mb-4 w-[50%]">
            <label
              htmlFor="signedBy"
              className="block text-sm font-medium text-gray-700"
            >
              By:
            </label>
            <input
              type="text"
              id="signedBy"
              name="signedBy"
              value={formData.signedBy}
              onChange={handleChange}
              className="mt-1 block text-gray-500 w-full h-8 border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Lease Agreement
        </button>
      </form>
    </div>
  );
}
