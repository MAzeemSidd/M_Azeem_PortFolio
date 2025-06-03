//Font from Nextjs
import { Poppins, Open_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
export const openSans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
})
export const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})