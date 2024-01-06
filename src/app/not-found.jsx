import Link from "next/link";

const NotFound = () => {
  return <div className="grid justify-center py-8">Not found the page
      <button className="block mt-4"><Link href="/" className="bg-[green] p-2 rounded-lg text-[white]">Return to home</Link></button>
  </div>;
};

export default NotFound;
