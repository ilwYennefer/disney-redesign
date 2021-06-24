import Image from "next/image";

function Viewers() {
  return (
    <div className="mt-10 grid grid-cols-5 space-x-8 pt-7 pb-14">
      <div className="border-4 border-[#f9f9f9] border-opacity-10 rounded-lg shadow-image transform hover:scale-105 hover:border-opacity-80 cursor-pointer hover:shadow-image-hover transition-all duration-250 ease-link-transition">
        <Image
          src="https://rb.gy/enhrla"
          layout="responsive"
          height={1000}
          width={1920}
        />
      </div>
      <div className="border-4 border-[#f9f9f9] border-opacity-10 rounded-lg shadow-image transform hover:scale-105 hover:border-opacity-80 cursor-pointer hover:shadow-image-hover transition-all duration-250 ease-link-transition">
        <Image
          src="https://rb.gy/am79o1"
          layout="responsive"
          height={1000}
          width={1920}
        />
      </div>
      <div className="border-4 border-[#f9f9f9] border-opacity-10 rounded-lg shadow-image transform hover:scale-105 hover:border-opacity-80 cursor-pointer hover:shadow-image-hover transition-all duration-250 ease-link-transition">
        <Image
          src="https://rb.gy/twwhqt"
          layout="responsive"
          height={1000}
          width={1920}
        />
      </div>
      <div className="border-4 border-[#f9f9f9] border-opacity-10 rounded-lg shadow-image transform hover:scale-105 hover:border-opacity-80 cursor-pointer hover:shadow-image-hover transition-all duration-250 ease-link-transition">
        <Image
          src="https://rb.gy/9ysi7g"
          layout="responsive"
          height={1000}
          width={1920}
        />
      </div>
      <div className="border-4 border-[#f9f9f9] border-opacity-10 rounded-lg shadow-image transform hover:scale-105 hover:border-opacity-80 cursor-pointer hover:shadow-image-hover transition-all duration-250 ease-link-transition">
        <Image
          src="https://rb.gy/higuwl"
          layout="responsive"
          height={1000}
          width={1920}
        />
      </div>
    </div>
  );
}

export default Viewers;
