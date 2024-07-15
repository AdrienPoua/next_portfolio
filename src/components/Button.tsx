import { Box, Typography, Button } from '@mui/material';
import Image, { StaticImageData } from 'next/image';


type ButtonProps = {
    icon?: StaticImageData;
    href: string;
    text: string;
    navitem? : boolean;
}

export function ButtonBlackEffect({ icon, href, text, navitem }: Readonly<ButtonProps>) {
    return (
        <Button href={href} variant={navitem ? undefined : "outlined"} className="relative group overflow-hidden rounded-full px-8 py-2 flex items-center gap-2 ">
            <Box className="bg-black absolute -left-3 -right-3  top-0 bottom-0 translate-x-full -skew-x-12 transition-transform duration-300 group-hover:translate-x-0 group-hover:ease-in-out -z-10" />
            <Typography className={`relative text-black group-hover:text-white duration-300 ${navitem ? "text-xl" : "text-base"} ease-in-out`}>{!navitem ? text.toUpperCase() : text}</Typography>
            {icon && <Image src={icon} alt={"Way to contact me"} className="w-10 h-10 rounded-full " />}
        </Button>
    );
}
