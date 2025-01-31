"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AboutPage = () => {
    const router = useRouter()
    const isLoggedIn = true
    const handleRoute =()=>{

        if (isLoggedIn) {
            router.push("/about/address")
        }else{
            router.push("/")
        }

    }
  return (
    <div>AboutPage

        <Link href={"/about/address"}> Go to Address </Link><br />
        <button onClick={handleRoute}>Go to address using hook</button>

    </div>
  )
}

export default AboutPage