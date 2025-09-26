export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "Full-stack web applications built with React, Next.js, and modern frameworks. From e-commerce platforms to enterprise solutions.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, DevOps, and deployment solutions on AWS, Azure, and Google Cloud.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for optimal user experience.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "API Development & Integration",
    description: "RESTful APIs, GraphQL endpoints, and seamless third-party integrations for your applications.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Start Your Project?",
    description: "Let's discuss your requirements and build something amazing together.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    des: "Full-stack e-commerce solution with React, Node.js, and payment integration. Features include user authentication, product management, and order processing.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/portfolio/ecommerce",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    des: "Secure mobile banking application with React Native, featuring biometric authentication, real-time transactions, and financial analytics.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/portfolio/banking",
  },
  {
    id: 3,
    title: "Cloud Management Dashboard",
    des: "Enterprise cloud management platform with real-time monitoring, cost optimization, and automated scaling using AWS and Azure.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/portfolio/cloud-dashboard",
  },
  {
    id: 4,
    title: "AI-Powered Analytics Platform",
    des: "Advanced analytics platform with machine learning capabilities, real-time data processing, and interactive visualizations.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Link Innovations transformed our business with a custom e-commerce platform. Their technical expertise and attention to detail exceeded our expectations. The platform has increased our online sales by 300%.",
    name: "Sarah Chen",
    title: "CEO of TechStart Solutions",
  },
  {
    quote:
      "The mobile app they developed for our banking services is exceptional. The security features and user experience are outstanding. Our customer satisfaction has improved significantly.",
    name: "David Rodriguez",
    title: "CTO of FinanceFirst Bank",
  },
  {
    quote:
      "Their cloud migration services saved us thousands in infrastructure costs. The team's expertise in AWS and Azure is unmatched. Highly recommend their services.",
    name: "Emily Watson",
    title: "IT Director at GlobalCorp",
  },
  {
    quote:
      "Link Innovations delivered our AI-powered analytics platform ahead of schedule. The machine learning capabilities have revolutionized our data insights. Outstanding work!",
    name: "James Thompson",
    title: "VP of Data Analytics, InnovateTech",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development Services",
    desc: "Full-stack web applications using React, Next.js, Node.js, and modern frameworks. From concept to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Native iOS and Android applications, plus cross-platform solutions using React Native and Flutter.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Cloud Solutions & DevOps",
    desc: "Cloud infrastructure setup, migration, and optimization on AWS, Azure, and Google Cloud platforms.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "UI/UX Design Services",
    desc: "User-centered design, wireframing, prototyping, and creating intuitive user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
