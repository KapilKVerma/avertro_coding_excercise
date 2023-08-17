import React, { useState } from "react";
// === Components ===
import Mission from "./components/mission/Mission";
import BusinessObjectives from "./components/businessObjectives/BusinessObjectives";
import TabsGroup from "../../UICompnents/TabsGroup";

const SecurityStrategy = () => {
  const [currentTab, setCurrentTab] = useState(2);

  return (
    <>
      {/* Security Strategy Header */}
      <header>Set Security Strategy</header>
      <hr />

      {/* Security Strategy Body */}
      <section>
        <TabsGroup currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {currentTab === 1 ? <Mission /> : null}
        {currentTab === 2 ? <BusinessObjectives /> : null}
      </section>
    </>
  );
};

export default SecurityStrategy;
