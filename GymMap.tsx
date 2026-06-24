"use client";
import React, { useState } from "react";
import { MapPin, Locate } from "lucide-react";

// Sample branch locations (latitude, longitude)
const branches = [
  { name: "H2O Nasr City", lat: 30.0769, lng: 31.2885 },
  { name: "H2O Maadi", lat: 30.0465, lng: 31.3413 },
  { name: "H2O Zamalek", lat: 30.0315, lng: 31.2255 },
];

// Haversine distance calculation
function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function GymMap() {
  const [nearest, setNearest] = useState<string | null>(null);

  const handleFindNearest = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      let minDist = Infinity;
      let nearestBranch = "";
      branches.forEach((b) => {
        const d = getDistance(latitude, longitude, b.lat, b.lng);
        if (d < minDist) {
          minDist = d;
          nearestBranch = b.name;
        }
      });
      setNearest(`${nearestBranch} (${minDist.toFixed(1)} km away)`);
    }, () => {
      alert("Unable to retrieve your location.");
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card-dark rounded-2xl border border-white/10 p-4 shadow-xl">
      <div className="relative pb-[56.25%] h-0">
        {/* Google Maps embed centered on first branch */}
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${branches[0].lat},${branches[0].lng}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleFindNearest}
          className="flex items-center gap-2 bg-accent-teal text-primary-dark font-semibold py-2 px-4 rounded-lg hover:bg-accent-teal/90 transition"
        >
          <Locate className="h-4 w-4" /> Find Nearest Branch
        </button>
        {nearest && (
          <span className="text-sm text-white flex items-center">
            <MapPin className="h-4 w-4 mr-1" /> {nearest}
          </span>
        )}
      </div>
    </div>
  );
}
