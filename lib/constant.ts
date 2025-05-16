import bgHero from '@/public/images/hero.png'
import bitcoinBg from '@/public/images/bitcoin.png'

import rocket from '@/public/icons/rocket.png'
import lock from '@/public/icons/lock.png'
import reliable from '@/public/icons/reliable.png'
import support from '@/public/icons/support.png'
import cost from '@/public/icons/cost.png'
import cashapp from '@/public/icons/cashapp.webp'
import paypal from '@/public/icons/paypal.png'
import btc from '@/public/icons/btc.png'
import giftcard from '@/public/icons/card.png'
import aboutBg from '@/public/images/aboutBg.png'



export const appName = process.env.NEXT_PUBLIC_APP_NAME || "One Exchange";
export const appDescription =process.env.NEXT_PUBLIC_APP_DESCRIPTION ||  "One Exchange is a platform for trading cryptocurrencies.";
export const appSlogan = process.env.NEXT_PUBLIC_APP_SLOGAN || '#Your one stop trade hub' 
export const appKeywords = ["cryptocurrency", "trading", "exchange", "crypto", "bitcoin", "ethereum", "blockchain"];
export const appAuthor = "One Exchange";
export const appVersion = "1.0.0";
export const appCopyright = "One Exchange";



export const icons ={
    rocket,
    lock,
    reliable,
    support,
    cost,
    cashapp,
    paypal,
    btc,
    giftcard
} 

export const images ={
    bgHero,
    bitcoinBg,
    aboutBg
} 