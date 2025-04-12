export default function Input({
  textarea,
  select,
  selectName,
  selectOptions,
  label,
  onChangeValue,
  stateName,
  type,
  ...props
}) {

  let inputClasses = 'bg-cream/60 rounded-md w-full text-sm p-2 text-white placeholder:font-bold placeholder:text-navy/70';

  return (
    <p className="grid gap-2">
      <label htmlFor={label} className="text-cream text-sm md:text-xl font-bold">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...props}
          type="text"
          id={label}
          name={stateName}
          className="bg-cream/60 rounded-md w-full text-sm p-2 text-white min-h-60"
          onChange={(event) => onChangeValue(stateName, event.target.value)}
        ></textarea>
      ) : select ? (
        <select
          name={stateName}
          id={label}
          className="bg-cream/60 rounded-md w-full text-sm p-2 text-white"
          onChange={(event) => onChangeValue(stateName, event.target.value)}
        >
          {selectOptions.map((option, index) => (
            <option
              key={index}
              value={option}
              name={option}
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
          name={stateName}
          onChange={(event) => {onChangeValue(stateName, event.target.value)}}
          type={type}
          {...props}
          // required

        />
      )}
    </p>
  );
}
