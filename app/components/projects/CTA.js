import React from "react";
import Link from "next/link";

const CTA = ({ className, title, description, cta_label, cta_link }) => {
  return (
    <section className={`${className}`}>
      <div className="container px-4 mx-auto">
        <div className="flx justify-center">
          <div className="w-full max-w-2xl items-center mx-auto text-center">
            <h2 className="text-white text-6xl font-medium mb-8">{ title }</h2>
            <p className="text-white tex-lg opacity-60 leading-relaxed mb-8">
              { description }
            </p>
            <p>
              <Link
                href={cta_link}
                className="transition-all duration-300 ease-in-out inline-block
                  text-[11.5px] tracking-[2px] font-bold uppercase bg-[#fb9e25]
                  py-4 px-5 text-white hover:bg-white hover:text-orange-600
                  hover:shadow-2xl ">
                  { cta_label}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
