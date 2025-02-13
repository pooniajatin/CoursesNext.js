"use client";
import React from "react";
import { EvervaultCard } from "../../components/ui/evervault-card";
import coursesData from "../../data/music_courses.json";

function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.courses.map((course) => (
            <a href={`/courses/${course.slug}`} key={course.id}>
              <EvervaultCard
                text={course.title}
                className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;