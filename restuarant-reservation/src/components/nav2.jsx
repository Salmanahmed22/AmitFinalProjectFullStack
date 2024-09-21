import React from 'react'
import Image from 'next/image'

const Nav2 = () => {
  return (
    <div>
        <Image src={"/logo.svg"} width={100} height={100} alt={"logo"}></Image>
        <Image src={"/logoName.svg"} width={100} height={100} alt={"logo"}></Image>
    </div>
  )
}

export default Nav2