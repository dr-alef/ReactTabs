import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      id: 1,
      title: "TAB 1",
      content:
        "Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "TAB 2",
      content:
        "Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "TAB 3",
      content:
        "Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "TAB 4",
      content:
        "Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="App">
      <h1>Tabs Component with React</h1>
      <div className="tabs">
        {tabData.map((tab, index) => {
          let tabClass = "tab";
          if (activeTab === index) {
            tabClass += " active";
          }

          return (
            <div
              key={index}
              className={tabClass}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      <div className="tab-content">{tabData[activeTab].content}</div>
    </div>
  );
}

export default App;
