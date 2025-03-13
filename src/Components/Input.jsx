export default function Input({
  textarea,
  select,
  selectName,
  selectOptions,
  label,
  onChangeValue,
  stateName,
  ...props
}) {

  let inputClasses = 'bg-cream/60 rounded-md w-full text-sm p-2 text-white placeholder:font-bold placeholder:text-navy/70';

  return (
    <p className="grid gap-2">
      <label htmlFor={label} className="text-cream text-sm font-bold">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...props}
          type="text"
          id={label}
          name={label}
          className="bg-cream/60 rounded-md w-full text-sm p-2 text-white min-h-60"
          onChange={(event) => onChangeValue(stateName, event.target.value)}
        ></textarea>
      ) : select ? (
        <select
          name={label}
          id={label}
          className="bg-cream/60 rounded-md w-full text-sm p-2 text-white"
        >
          {selectOptions.map((option, index) => (
            <option
              key={index}
              value={option}
              className="bg-gray rounded-md w-1/2 text-sm p-2 text-beige"
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className={inputClasses}
          id={label}
          name={label}
          onChange={(event) => {
            onChangeValue(stateName, event.target.value)
          }}
          {...props}
          required

        />
      )}
    </p>
  );
}
