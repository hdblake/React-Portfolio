export default function Links({ url, name, icon }) {
  return (
    <div className="flex justify-center items-center gap-x-2">
      <a href={url} target="_blank" rel="noreferrer">
        <button className="bg-gradient-to-r from-main to-secondary transition duration-300 ease-in hover:-translate-y-1 hover:scale-110 rounded-xl text-accent2 p-3 text-xl font-bold flex flex-row justify-evenly items-center w-60 shadow-lg">
          {name} {icon}
        </button>
      </a>
    </div>
  );
}
