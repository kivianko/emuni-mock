import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function ServiceCard({ title, description, buttonText }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
      <div className="relative h-48">
        <Image src="/images/service_bg.png" alt="Card Image" fill style={{ objectFit: "cover" }} priority />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="leading-6 mb-4">{description}</p>
        <Button>{buttonText}</Button>
      </div>
    </div>
  );
}
