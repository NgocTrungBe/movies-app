import React from "react";

interface Props {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
}

const SegmentedControl: React.FC<Props> = ({ options, selected, onChange }) => {
  return (
    <div className="segmented-control">
      {options && options.length ? (
        options.map((opt, index) => (
          <button
            key={index}
            className={`option ${selected == opt ? "active" : ""}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default SegmentedControl;
