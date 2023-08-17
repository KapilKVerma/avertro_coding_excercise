import React from "react";

const TabsGroup = (props) => {
  const { currentTab, setCurrentTab } = props;

  const tabsList = [
    { title: "Mission & Vision", value: 1 },
    { title: "Strategic Business Objectives", value: 2 },
  ];

  return (
    <div>
      {tabsList.map((tab, index) => {
        return (
          <button
            key={index}
            className="tab text-truncate"
            onClick={() => setCurrentTab(tab.value)}
            style={{ backgroundColor: currentTab === tab.value ? "#ffffff" : "#d7d7d7" }}
          >
            {tab.title}
          </button>
        );
      })}
    </div>
  );
};

export default TabsGroup;
