import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div>
      <span className="bg-orangeLight px-6 py-2 text-white font-semibold">{skill}</span>
    </div>
  );
};

export default SkillItem;
