"use client";

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionGroupProps {
  title: string;
  items: AccordionItem[];
  groupId: string;
}

export function AccordionGroup({ title, items, groupId }: AccordionGroupProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, index) => {
          const itemId = `${groupId}-${index}`;
          return (
            <div
              key={itemId}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(itemId)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:bg-gray-50 transition-all duration-200 ease-out"
                aria-expanded={openItem === itemId}
                aria-controls={`content-${itemId}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm md:text-md text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <CaretDownIcon
                    size={20}
                    className={`text-gray-500 transition-all duration-300 ease-out flex-shrink-0 ${
                      openItem === itemId ? "transform rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id={`content-${itemId}`}
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  openItem === itemId
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`px-6 pb-4 text-gray-600 text-sm md:text-md leading-relaxed transition-all duration-300 ease-out ${
                    openItem === itemId
                      ? "transform translate-y-0"
                      : "transform -translate-y-2"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
