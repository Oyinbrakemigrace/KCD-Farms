import React from 'react'
import Heading from '../Heading'
import ethical from "../../assets/ethical.png"
import fresh from "../../assets/fresh.png"
import sustainable from "../../assets/sustainable.png"
import trusted from "../../assets/trusted.png"
import customer from "../../assets/customer.png"
import farmToTable from "../../assets/farm-to-table.png"

const WhyChooseUs = () => {
    const data = [
    {
    png: ethical,
    title: "Ethical farming",
    desc:"Our animals are raised with care, ensuring their health and well-being."
    },
    {
    png: fresh,
        title: "Fresh & Organic",
        desc:"We produce high-quality poultry and fish, free from artificial additives."
    },
    {
    png: sustainable,
        title: "Sustainable Practices",
        desc:"Our eco-conscious methods contribute to a healthier planet."
    },
    {
    png: trusted,
        title: "Locally Sourced & Trusted",
        desc:"We are a proudly local farm committed to supplying fresh, top-quality produce to our community."
    },
    {
    png: farmToTable,
        title: "Farm-to-Table Freshness ",
        desc:"Our products are harvested and delivered fresh, ensuring superior taste and nutritional value."
    },
    {
    png: customer,
        title: "Customer-Centric Service",
        desc:"We prioritize your satisfaction, offering transparency, reliability, and quality in everything we do."
    }
]
  return (
    <div>
          <Heading text="Why Choose KCD Farms?"/>
          <div className='lg:mt-7 mt-7 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                data.map((item, index)=>(
                    <div key={index} className='bg-slate-100 text-zinc-900 rounded-xl shadow-md px-3 py-7 space-y-4 flex flex-col justify-center items-center'>
                        <img src={item.png} alt="img" className='w-[5rem]' />
                        <h2 className='text-2xl font-bold capitalize whitespace-nowrap text-farm-green'>{item.title}</h2>
                        <p className='leading-relaxed'>
                            {item.desc}
                        </p>
                    </div>
                ))
            }
          </div>
          
    </div>

  )
}

export default WhyChooseUs