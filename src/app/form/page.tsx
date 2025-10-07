"use client";
// src/ServiceForm.tsx
import { useState } from "react";
import { User, Wrench, MapPin, Wallet, Briefcase, Calendar, Send } from "lucide-react";

export default function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    charges: "",
    experience: "",
    age: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("✅ Service Provider Registered Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-indigo-100 transition-all hover:shadow-indigo-300/40"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-8">
          Register as a Service Provider
        </h2>

        {/* Input Field Helper */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <User size={18} /> Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:border-indigo-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Service */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <Wrench size={18} /> Service Type
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:border-indigo-400"
              required
            >
              <option value="">-- Select Service --</option>
              <option value="Pandit">Pandit</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Plumber">Plumber</option>
              <option value="Mechanic">Mechanic</option>
              <option value="House Maid">House Maid</option>
            </select>
          </div>

          {/* Charges */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <Wallet size={18} /> Charges (₹)
            </label>
            <input
              type="number"
              name="charges"
              value={formData.charges}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:border-indigo-400"
              placeholder="Enter your charges"
              required
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <Briefcase size={18} /> Experience (years)
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:border-indigo-400"
              placeholder="Enter experience"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <Calendar size={18} /> Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:border-indigo-400"
              placeholder="Enter your age"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
              <MapPin size={18} /> Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all hover:border-indigo-400"
              placeholder="Enter work location"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all flex items-center justify-center gap-2"
        >
          <Send size={18} />
          Submit
        </button>
      </form>
    </div>
  );
}