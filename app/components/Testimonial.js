"use client";
import cn from "@/app/lib/cn";
import Avatars from "@/utils/avatars";
import { useEffect, useState } from "react";
const list = [
  { name: "John Doe", url: "", des: "Great service!" },
  { name: "Jane Smith", url: "", des: "Loved the experience." },
  { name: "Alice Johnson", url: "", des: "Very satisfied." },
  { name: "Robert Brown", url: "", des: "Will come again." },
];

async function fetchAvatars() {
  const avatars = await Promise.all(
    list.map((item) => Avatars(item.name.split(" ").join("+")))
  );
  return avatars.map((avatar, index) => ({
    ...list[index],
    avatarUrl: avatar.url,
  }));
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchAvatars().then(setTestimonials);
  }, []);
  return (
    <div>
      <div className={cn("flex mx-auto w-11/12")}>
        <div>
          <div>
            <h2 className="text-red-500 font-bold text-xl">Testimonial</h2>
          </div>
          <div>
            <h3 className="text-lg">
              Review <span className="text-red-500">from our guests</span>
            </h3>
            <div>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex items-center my-4 w-full bg-reds"
                >
                  <img
                    src={testimonial.avatarUrl}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p>{testimonial.des}</p>
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

export default Testimonial;
