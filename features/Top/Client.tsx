"use client";

import ParticleSystem from "@/utils/threejs_particle";

export default function Client() {
  return (
    <section className="relative w-full h-[600px]">
      <ParticleSystem width="100%" height="100%" />
      <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-8 p-8">
        <h2 className="text-3xl">主要取引先</h2>
      </div>
    </section>
  );
}
