export const ProjectsData = [ 
    {
        name:'Swift Sail Ecommerce App',
        paragraphTxt:'SwiftSail is simple ecommerce app built using Next.js 14 . Styled with TailwindCSS. Products are fetched from custom supabase database which is edited using SwiftSailCMS. It has all the core ecommerce features such as all products page(home), cart,navigation,product page, checkout page etc. Cart and all its methods are built using Context react hook (displaying cart products, removing from cart,adding products to cart).',
        technologies:['Next.js', 'TailwindCSS', 'Supabase'],
        image: '/swift-cover.png',
        github:'https://github.com/maricd7/SwiftSail',
        live:'https://swift-sail.vercel.app/',
    },
    {
        name:'Swift Sail CMS (work in progress)', 
        paragraphTxt:'Swift Sail CMS is a robust solution designed to efficiently manage the SwiftSail shop, offering a range of features such as product addition, editing, removal, order tracking (Charts), and more. Crafted with Next.js and Tailwind CSS, this platform is enhanced with TypeScript to ensure thorough type-checking, crucial for enabling clients to directly edit content on the production environment with confidence.',
        technologies:['Next.js', 'TailwindCSS', 'Supabase', 'Typescript','Chart JS',],
        image: '/cms-cover.png',
        github:'https://github.com/maricd7/SwiftSailCMS',
    }
] 