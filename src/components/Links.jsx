export default function Links({ url, name }) {
  return (
    <a
      className="text-main underline decoration-2 decoration-secondary font-bold text-xl hover:text-secondary hover:decoration-main"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  );
}
