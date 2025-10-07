"use client";
import { useState } from "react";
import { Wrench, Home, Hammer, Car, Users, ArrowLeft, Star, MapPin, Clock } from "lucide-react";

type ServiceType = {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  image: string;
  color: string;
  providers: {
    name: string;
    rating: number;
    experience: string;
    location: string;
    price: string;
    image: string;
  }[];
};

const servicesData: ServiceType[] = [
  { 
    id: 1, 
    name: "Pandit", 
    icon: Users,
    description: "Traditional Hindu priests for religious ceremonies",
    image: "https://images.unsplash.com/photo-1583225214464-9a83f98dfcc8?w=400&h=300&fit=crop",
    color: "from-orange-400 to-red-500",
    providers: [
      { name: "Pt. Rajesh Sharma", rating: 4.8, experience: "15 years", location: "Mumbai Central", price: "₹2000-5000", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop" },
      { name: "Pt. Anil Kumar", rating: 4.9, experience: "20 years", location: "Andheri West", price: "₹3000-6000", image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop" },
      { name: "Pt. Suresh Joshi", rating: 4.7, experience: "12 years", location: "Borivali", price: "₹1500-4000", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" }
    ]
  },
  { 
    id: 2, 
    name: "Carpenter", 
    icon: Hammer,
    description: "Expert woodworking and furniture repair services",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    color: "from-amber-500 to-yellow-600",
    providers: [
      { name: "Ramesh Patil", rating: 4.6, experience: "10 years", location: "Dadar", price: "₹500-1500/hr", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=100&h=100&fit=crop" },
      { name: "Sunil Yadav", rating: 4.8, experience: "8 years", location: "Bandra", price: "₹600-1800/hr", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop" },
      { name: "Vijay Singh", rating: 4.5, experience: "12 years", location: "Kurla", price: "₹450-1200/hr", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop" }
    ]
  },
  { 
    id: 3, 
    name: "Plumber", 
    icon: Wrench,
    description: "Quick and reliable plumbing solutions",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    color: "from-blue-500 to-cyan-600",
    providers: [
      { name: "Mohit Plumbing", rating: 4.7, experience: "7 years", location: "Powai", price: "₹400-1000/hr", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop" },
      { name: "Rakesh Kumar", rating: 4.9, experience: "15 years", location: "Goregaon", price: "₹500-1500/hr", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
      { name: "Sanjay Services", rating: 4.6, experience: "9 years", location: "Malad", price: "₹450-1200/hr", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop" }
    ]
  },
  { 
    id: 4, 
    name: "Mechanic", 
    icon: Car,
    description: "Professional vehicle repair and maintenance",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    color: "from-slate-600 to-gray-800",
    providers: [
      { name: "Auto Care Center", rating: 4.8, experience: "18 years", location: "Vashi", price: "₹800-2000/service", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
      { name: "Speed Mechanics", rating: 4.7, experience: "10 years", location: "Thane", price: "₹700-1800/service", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
      { name: "Reliable Auto Works", rating: 4.9, experience: "22 years", location: "Kandivali", price: "₹900-2500/service", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" }
    ]
  },
  { 
    id: 5, 
    name: "House Maid", 
    icon: Home,
    description: "Trusted cleaning and household help",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    color: "from-pink-400 to-rose-500",
    providers: [
      { name: "Meera Cleaning Services", rating: 4.8, experience: "5 years", location: "Juhu", price: "₹8000-12000/month", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
      { name: "Lakshmi Home Care", rating: 4.9, experience: "8 years", location: "Worli", price: "₹10000-15000/month", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
      { name: "Savitri Housekeeping", rating: 4.7, experience: "6 years", location: "Chembur", price: "₹7000-11000/month", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" }
    ]
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  if (selectedService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 font-semibold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </button>

          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${selectedService.color} p-8 md:p-12`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedService.name}</h1>
                  <p className="text-white/90 text-lg">{selectedService.description}</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></span>
                Available Providers
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {selectedService.providers.map((provider, index: number) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>
                    
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={provider.image} 
                          alt={provider.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition">{provider.name}</h3>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-gray-700">{provider.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 text-indigo-500" />
                          <span>{provider.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-indigo-500" />
                          <span>{provider.location}</span>
                        </div>
                      </div>

                      <div className="bg-indigo-50 rounded-xl p-3 mb-4">
                        <p className="text-xs text-indigo-600 font-medium">Starting from</p>
                        <p className="text-xl font-bold text-indigo-700">{provider.price}</p>
                      </div>

                      <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition font-semibold shadow-lg shadow-indigo-500/30">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg">Find trusted professionals for all your needs</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
                <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <service.icon className="w-6 h-6 text-gray-800" />
                </div>
              </div>

              <div className="relative p-6">
                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {service.name}
                </h2>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{service.providers.length} providers</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-semibold hover:from-indigo-600 hover:to-purple-700 transition shadow-lg shadow-purple-500/30">
                    View All →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}