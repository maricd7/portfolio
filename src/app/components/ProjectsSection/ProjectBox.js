import Image from 'next/image'
import React from 'react'
import { Paragraph, Subheading } from '../common'

export const ProjectBox = () => {
  return (
    <div className='rounded-lg mt-8 flex gap-4'>
        <Image className='rounded-lg' src='/swift-cover.png' width={320} height={160} alt='SwiftSail Project Cover'/>
        <div>
          <Subheading text='SwiftSail Ecommerece App'/>
          <Paragraph text='SwiftSail is simple ecommerce app built using Next.js 14 . Styled with TailwindCSS. It uses formik and yup for form validation on checkout page. Products are fetched from custom supabase database which is edited using SwiftSailCMS. It has all the core ecommerce features such as all products page(home), cart,navigation,product page, checkout page etc. Cart and all its methods are built using Context react hook (displaying cart products, removing from cart,adding products to cart).'/>
        </div>
    </div>
  )
}
