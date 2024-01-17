import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'yellow-primary' : '#E78A00',
        'brown-button' : '#6F4200',
        'gray-label' : '#8E8E8E'
      },
      maxWidth:{
        'grid' : '77.9375rem',
        'widhtText': '38.5625rem',
        'widhtPayment' : '30rem'
      },
      height:{
        'sectionHome-height' : '48rem',
        'heightChefBro' : '37.125rem',
        'heightCard' : '35.375rem'

      },
      width:{
        'widhtChefBro' : '37.125rem',
        'widhtCard' : '25.4375rem'
        
      },
    
    },
  },
  plugins: [],
}
export default config
