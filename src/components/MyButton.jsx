export default function MyButton(props) {
  return (
    <>
      <button
        disabled={props.disabled}
        // disabled={true}
        onClick={props.onClick}
        className={`bg-yellow-300 w-20 h-20 ${
          props.disabled ? "" : "hover:bg-white"
        }`}
      >
        <span className="text-green-400">{props.name}</span>
      </button>
    </>
  );
}
