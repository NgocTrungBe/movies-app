import React from "react";

interface Tab {
  type: string;
  onchange: (type: string) => void;
}

const Tab: React.FC<Tab> = ({ type, onchange }) => {
  const tabs = [
    {
      title: "Now Playing",
      type: "now_playing",
    },
    {
      title: "Top Related",
      type: "top_related",
    },
  ];

  const handleChangeTab = (type: string) => onchange(type);

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.type}
          className={`tab-item ${tab.type === type ? "active" : ""}`}
          onClick={() => handleChangeTab(tab.type)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tab;
