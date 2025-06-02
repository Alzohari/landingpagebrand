// components/ui/common/TabsComponent.tsx
import { useState } from "react";
import ComponentCard from "./ComponentCard";

type Tab = {
  label: string;
  title?: string;
  content: React.ReactNode;
};

type TabsComponentProps = {
  tabs: Tab[];
};

export default function TabsComponent({ tabs }: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6">
      <div className="flex flex-row-reverse space-x-2 space-x-reverse border-b border-gray-200 dark:border-gray-700 text-right">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === index
                ? "border-b-2 border-primary text-primary"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ComponentCard title={tabs[activeTab].title || tabs[activeTab].label}>
        {tabs[activeTab].content}
      </ComponentCard>
    </div>
  );
}