const navItems = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Us",
        href: "/about-us"
    },
    {
        label: "Our Animals",
        children: [
            {
                label: "Our Fishes",
                href: "/our-fishes"
            },
            {
                label: "Our Chickens",
                href: "/our-chickens"
            },
        ]
    },
    {
        label: "Contact Us",
        href: "/contact-us"
    },
]

export default navItems