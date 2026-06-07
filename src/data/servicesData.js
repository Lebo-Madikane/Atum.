// This file contains all service information

export const servicesData = {
    webDesign: {
        id: 'web-design',
        title: 'Web Design',
        icon: 'design', // Will use with FontAwesome
        //tagline: 'DESIGN',
        headerImage: '/learnMore-images/designHeaderImage.svg',
        challenge: 'Your website is often the first impression potential clients have of your brand. In seconds, visitors decide whether to stay or leave.',
        solution: 'We create visually striking and user-focused digital experiences that build trust, improve engagement, and increase conversions.',
        highlights: [
             'Responsive' ,
             'UI/UX' ,
             'Brand Integration' 
        ],
        carouselImages: [
            {
                id: 1,
                image: '/learnMore-images/carousel/web-design/designImageOne.webp',
            },
            {
                id: 2,
                image: '/learnMore-images/carousel/web-design/designImgTwo.webp',
            },
            {
                id: 3,
                image: '/learnMore-images/carousel/web-design/designImgThree.svg',
            },
            {
                id: 4,
                image: '/learnMore-images/carousel/web-design/designImgFour.webp',
            },
            {
                id: 5,
                image: '/learnMore-images/carousel/web-design/designImgFive.webp',
            },
            {
                id: 6,
                image: '/learnMore-images/carousel/web-design/designImgSix.webp',
            },
        ],
        ctaText: 'Start Project',
        ctaLink: '/contact?service=web-design'
    },

    webDevelopment: {
        id: 'web-development',
        title: 'Web Development',
        icon: 'development', // Will use with FontAwesome
        //tagline: 'DEVELOPMENT',
        headerImage: '/learnMore-images/devHeaderImage.svg',
        challenge: 'A beautiful design means nothing if your website is slow, buggy, or breaks on mobile.',
        solution: 'We build scalable front-end and back-end systems that power your digital infrastructure. Fast, secure, and built to grow with your business.',
        highlights: [
            'Modern Stack',
            'Clean',
            'Scalable'
        ],
        carouselImages: [
            {
                id: 1,
                image: '/learnMore-images/carousel/web-development/devImgOne.svg',
            },
            {
                id: 2,
                image: '/learnMore-images/carousel/web-development/devImgTwo.svg',
            },
            {
                id: 3,
                image: '/learnMore-images/carousel/web-development/devImgThree.svg',
            },
            {
                id: 4,
                image: '/learnMore-images/carousel/web-development/devImgFour.svg',
            },
            {
                id: 5,
                image: '/learnMore-images/carousel/web-development/devImgFive.svg',
            },
            {
                id: 6,
                image: '/learnMore-images/carousel/web-development/devImgSix.svg',
            },
        ],
        ctaText: 'Start Project',
        ctaLink: '/contact?service=web-development'
    },

    digitalMarketing: {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: 'growth', // Will use with FontAwesome
        //tagline: 'GROWTH',
        headerImage: '/learnMore-images/marketingHeaderImage.svg',
        challenge: 'A stunning website without traffic is like a billboard in the desert.',
        solution: 'We deploy SEO and data-driven strategies designed to present your brand into markets. Through targeted campaigns and continuous optimization, turning visibility into conversions.',
        highlights: [
            'SEO',
            'Data-Driven',
            'Analytics'
        ],
        carouselImages: [
            {
                id: 1,
                image: '/learnMore-images/carousel/digital-marketing/digitalMImage.webp',
            },
            {
                id: 2,
                image: '/learnMore-images/carousel/digital-marketing/digitalMImgOne.svg',
            },
            {
                id: 3,
                image: '/learnMore-images/carousel/digital-marketing/digitalMImgTwo.svg',
            },
            {
                id: 4,
                image: '/learnMore-images/carousel/digital-marketing/digitalMImgThree.svg',
            },
            {
                id: 5,
                image: '/learnMore-images/carousel/digital-marketing/digitalMImgFour.svg',
            },
            {
                id: 6,
                image: '/learnMore-images/carousel/digital-marketing/digitalMImgFive.svg',
            },
        ],
        ctaText: 'Start Project',
        ctaLink: '/contact?service=digital-marketing'
    }
};