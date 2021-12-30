export default function HeaderIcon({ title, Icon }) {
  return (
    <div className="mx-4 flex flex-col justify-center items-center text-center cursor-pointer select-none sm:mx-6 hover:text-white active:text-red-400">
      <Icon className="h-8" />
      <p className="my-1">{title}</p>
    </div>
  );
}
