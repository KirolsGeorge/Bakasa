export default function CategoriesItem(props: { name: string, cat: string }) {
  function handleClick() {
    console.log(`${props.cat}`);
  } 
  return (
    <div className="card bg-base-100 image-full w-50 shadow-sm overflow-hidden flex justify-center items-center relative">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <button className="btn btn-primary bg-transparent w-full h-full cursor-pointer border-0 absolute z-20" onClick={handleClick} />
      <h2 className="text-white absolute z-10">{props.name}</h2>
    </div>
  );
}
