import Image from "next/image";

export const WorksSection = () => {
  return (
    <section className="bg-white py-20" id="works">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h4 className="text-[50px] font-[Anton] leading-tight text-[#303849]">
            Our <span className="text-[#E38710]">Works</span>
          </h4>
          <div className="mt-4">
            <span className="text-[#303849] text-[16px] font-roboto font-semibold tracking-[0.5em] uppercase relative inline-block">
              Precast Concrete Products
              <span className="block w-[60px] h-[2px] bg-[#E38710] absolute left-1/2 -translate-x-1/2 -bottom-2"></span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-[1024px] mx-auto">
          {/* 1. Tig Precast (Text left, Image right) */}
          <div className="flex w-full h-[270px]">
            <div className="w-1/2 bg-[#1f212ce6] px-8 py-10 text-white flex flex-col justify-end">
              <h3 className="text-[24px] font-black leading-none">
                <span className="text-[#E38710] font-black">Tig</span>{" "}
                <span className="text-white">Precast</span>
              </h3>
              <p className="text-[16px] font-light leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit
              </p>
            </div>

            <div className="w-1/2 relative h-full">
              <Image
                src="https://plus.unsplash.com/premium_photo-1676154517862-3d39720f63f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY3JldGUlMjBzdXBwbHl8ZW58MHx8MHx8fDA%3D"
                alt="Tig Precast"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 2. Mig Precast (Image left, Text right) */}
          <div className="flex w-full h-[270px]">
            <div className="w-1/2 relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1547895749-888a559fc2a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Mig Precast"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 bg-[#E38710] px-8 py-10 text-white flex flex-col justify-end">
              <h3 className="text-[24px] font-black leading-none">
                <span className="text-[#303849] font-black">Mig</span>{" "}
                <span className="text-white">Precast</span>
              </h3>
              <p className="text-[16px] font-normal leading-relaxed mt-4 text-[#303849]">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit
              </p>
            </div>
          </div>

          {/* 3. Stick Precast (Text right, Image left) */}
          <div className="flex w-full h-[270px]">
            <div className="w-1/2 relative h-full">
              <Image
                src="https://plus.unsplash.com/premium_photo-1733952836513-e4899d830324?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbmNyZXRlZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Stick Precast"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-1/2 bg-[#1f212ce6] px-8 py-10 text-white flex flex-col justify-end">
              <h3 className="text-[24px] font-black leading-none">
                <span className="text-[#E38710] font-black">Tig</span>{" "}
                <span className="text-white">Precast</span>
              </h3>
              <p className="text-[16px] font-normal leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit
              </p>
            </div>
          </div>

          {/* 4. Spiral Precast (Image left, Text right) */}
          <div className="flex w-full h-[270px]">
            <div className="w-full relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Spiral Precast"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
