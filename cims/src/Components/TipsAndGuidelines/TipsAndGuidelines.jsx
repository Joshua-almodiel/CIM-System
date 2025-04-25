import React from 'react';

const TipsAndGuidelines = () => {
  return (
    <div className="max-w-4xl mx-auto m-12 p-12 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#147190] mb-6 text-center">Health Tips and Guidelines for Overall Well-Being</h2>
      <ul className="space-y-4">
        <li className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <strong className="text-[#147190] text-lg">1. Balanced Diet:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Eat a variety of foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats.</li>
            <li>Avoid processed and sugary foods as much as possible.</li>
            <li>Drink plenty of water to stay hydrated.</li>
            <li>Limit your intake of sodium and unhealthy fats (e.g., trans fats).</li>
          </ul>
        </li>
        <li className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300">
          <strong className="text-[#147190] text-lg">2. Regular Exercise:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Aim for at least 30 minutes of moderate exercise most days of the week (e.g., walking, cycling, swimming).</li>
            <li>Include strength training exercises twice a week to maintain muscle health.</li>
            <li>Stay active throughout the day (e.g., walking, taking the stairs).</li>
          </ul>
        </li>
        <li className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300">
          <strong className="text-[#147190] text-lg">3. Proper Sleep:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Adults should aim for 7-9 hours of sleep per night.</li>
            <li>Maintain a consistent sleep schedule and create a calming bedtime routine.</li>
            <li>Ensure your sleeping environment is comfortable and free from distractions.</li>
          </ul>
        </li>
        <li className="p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition duration-300">
          <strong className="text-[#147190] text-lg">4. Mental Health Care:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Practice stress-relief techniques such as meditation, mindfulness, or yoga.</li>
            <li>Take breaks during work or study to avoid burnout.</li>
            <li>Seek support from friends, family, or professionals if you're feeling overwhelmed.</li>
          </ul>
        </li>
        <li className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
          <strong className="text-[#147190] text-lg">5. Regular Health Check-ups:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Schedule routine check-ups with your doctor for early detection of health issues.</li>
            <li>Stay up to date with vaccinations and screenings.</li>
            <li>Monitor your blood pressure, cholesterol levels, and weight regularly.</li>
          </ul>
        </li>
        <li className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-300">
          <strong className="text-[#147190] text-lg">6. Good Hygiene Practices:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Wash your hands regularly, especially before eating or after using the bathroom.</li>
            <li>Brush your teeth twice a day and floss daily.</li>
            <li>Clean and disinfect commonly touched surfaces, especially during cold and flu season.</li>
          </ul>
        </li>
        <li className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition duration-300">
          <strong className="text-[#147190] text-lg">7. Avoid Harmful Habits:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Limit alcohol consumption and avoid smoking or recreational drug use.</li>
            <li>Be mindful of your posture, especially if you spend long hours sitting.</li>
            <li>Use sunscreen to protect your skin from harmful UV rays.</li>
          </ul>
        </li>
        <li className="p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition duration-300">
          <strong className="text-[#147190] text-lg">8. Stay Socially Active:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Maintain relationships with family and friends for emotional support.</li>
            <li>Participate in community activities to foster a sense of belonging.</li>
          </ul>
        </li>
        <li className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-300">
          <strong className="text-[#147190] text-lg">9. Focus on Preventative Health:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Educate yourself on preventative care (e.g., wearing seatbelts, avoiding excessive sun exposure).</li>
            <li>Practice safe driving and use helmets or protective gear when engaging in sports.</li>
          </ul>
        </li>
        <li className="p-4 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition duration-300">
          <strong className="text-[#147190] text-lg">10. Listen to Your Body:</strong>
          <ul className="mt-2 space-y-1 pl-5 list-disc text-gray-700">
            <li>Pay attention to warning signs like pain, fatigue, or discomfort.</li>
            <li>Don't ignore symptoms—seek medical advice if something feels off.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default TipsAndGuidelines;