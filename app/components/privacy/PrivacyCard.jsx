"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns';

const PrivacyCard = ({ privacy, index}) => {
  index *= 0.05

  return (
    <motion.div
      initial = {{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index,
          duration: 0.5,
        }
      }}
      viewport={ { once: true}}
      className="relative overflow-hidden">

      {/* Image top card */}
      <Link href={`/${privacy.url}`} className="relative block overflow-hidden group">
        <Image
          src={privacy.image}
          alt={privacy.title}
          width={1064}
          height={644}
          className='object-cover object-center h-[400px] !max-w-full duration-300
            transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md'
        />
      </Link>

      <div className="p-8">
        <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>
          { format(parseISO(privacy.date), "LLL d, yyyy")} • { privacy.author}
        </p>
        <h3 className="mb-4">
          <Link href={`/${urlWithoutBlog}`} className='text-lg leading-none'>
            {privacy.title}
          </Link>
        </h3>
        <p>
          <Link href={`/${urlWithoutBlog}`} className='uppercase text-[12px] tracking-[2px] border-b-2
            pb-2 inline-block border-orange-600'>
              Read More
          </Link>
        </p>
      </div>
    </motion.div>
  )
}

export default PrivacyCard

// ok
