import classes from "./Select.module.css";

const Select = ({ options, onChange, value, defaultValue }) => {
  return (
    <select 
    className={classes.select}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
