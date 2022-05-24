interface Props {
  name: string;
  title: string;
  id: string;
}

const Checkbox = ({ title, name, id }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        name={name}
        id={id}
        className="hidden settings-general-radio-checkbox"
      />
      <label htmlFor={id} className="flex items-center cursor-pointer">
        <span className="w-5 h-5 border-[2px] border-blue-400 mr-2 flex"></span>
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
