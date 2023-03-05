import Image from 'next/image'
import profilePic from '../public/coming.avif'

export const Navbar = () => {
    return (
        <>
            <h1> Jithin Jose Jacob - Personal Website </h1>
            <Image
                src={profilePic}
                alt='user profile picture'
                width={800}
                height={600}
                quality={80}
                loading='lazy'
            />
        </>
    )
}
