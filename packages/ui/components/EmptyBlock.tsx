export default function EmptyBlock({ name }: { name: string }) {
  return (
    <div className="relative border-4 border-dashed border-red-400 p-4 text-center text-xl text-black lg:p-10">
      <p>
        You have added <span className="font-bold">{name}</span> component, some
        required fields are still missing
      </p>
      <p>
        Fill <span className="text-red-400">required</span> fields to preview
        the component
      </p>
    </div>
  );
}
