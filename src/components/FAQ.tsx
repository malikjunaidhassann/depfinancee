"use client"

import { useState } from "react";
import { Plus, X } from "lucide-react";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQsProps {
  data: FaqItem[];
}

const FAQs: React.FC<FAQsProps> = ({ data }) => {
  const [open, setOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-full font-poppins">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="grid gap-2 py-2 border-b border-teal-500"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <p className="font-semibold text-gray-900 hover:text-teal-500 transition-colors">
              {item.question}
            </p>
            <button
              name="open"
              title="open"
              className="text-teal-500"
              onClick={() => handleClick(index)}
            >
              {open === index ? <X size={24} /> : <Plus size={24} />}
            </button>
          </div>

          {open === index && (
            <div className="pl-2 text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
