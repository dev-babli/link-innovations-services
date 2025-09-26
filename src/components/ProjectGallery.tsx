"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, X } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
    color: string;
}

const ProjectGallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = ['all', 'web', 'mobile', 'ecommerce', 'saas'];

    const projects: Project[] = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
            image: '/assets/projects/ecommerce.jpg',
            category: 'ecommerce',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
            liveUrl: 'https://demo-ecommerce.com',
            githubUrl: 'https://github.com/linkinnovations/ecommerce',
            featured: true,
            color: '#3B82F6'
        },
        {
            id: '2',
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.',
            image: '/assets/projects/banking.jpg',
            category: 'mobile',
            technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
            liveUrl: 'https://demo-banking.com',
            featured: true,
            color: '#10B981'
        },
        {
            id: '3',
            title: 'SaaS Dashboard',
            description: 'Comprehensive SaaS platform with user management, analytics, billing, and multi-tenant architecture.',
            image: '/assets/projects/saas.jpg',
            category: 'saas',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Vercel'],
            liveUrl: 'https://demo-saas.com',
            githubUrl: 'https://github.com/linkinnovations/saas-dashboard',
            featured: false,
            color: '#8B5CF6'
        },
        {
            id: '4',
            title: 'Corporate Website',
            description: 'Modern corporate website with CMS integration, SEO optimization, and performance monitoring.',
            image: '/assets/projects/corporate.jpg',
            category: 'web',
            technologies: ['Next.js', 'Contentful', 'Tailwind CSS', 'Vercel'],
            liveUrl: 'https://demo-corporate.com',
            featured: false,
            color: '#EC4899'
        },
        {
            id: '5',
            title: 'Food Delivery App',
            description: 'Multi-platform food delivery app with real-time tracking, payment integration, and restaurant management.',
            image: '/assets/projects/food-delivery.jpg',
            category: 'mobile',
            technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
            liveUrl: 'https://demo-fooddelivery.com',
            featured: true,
            color: '#F59E0B'
        },
        {
            id: '6',
            title: 'Portfolio Website',
            description: 'Creative portfolio website with smooth animations, dark mode, and interactive elements.',
            image: '/assets/projects/portfolio.jpg',
            category: 'web',
            technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Netlify'],
            liveUrl: 'https://demo-portfolio.com',
            githubUrl: 'https://github.com/linkinnovations/portfolio',
            featured: false,
            color: '#EF4444'
        }
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'web': return '🌐';
            case 'mobile': return '📱';
            case 'ecommerce': return '🛒';
            case 'saas': return '☁️';
            default: return '💻';
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Portfolio
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our recent projects and see how we&apos;ve helped businesses achieve their digital goals
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all flex items-center space-x-2 ${selectedCategory === category
                                ? 'bg-blue-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{getCategoryIcon(category)}</span>
                            <span className="capitalize">{category}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-gradient-to-br"
                                            style={{
                                                background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`
                                            }}
                                        />

                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold">
                                                Featured
                                            </div>
                                        )}

                                        {/* Hover Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex space-x-4">
                                                <motion.button
                                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Eye className="w-6 h-6" />
                                                </motion.button>
                                                {project.liveUrl && (
                                                    <motion.a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <ExternalLink className="w-6 h-6" />
                                                    </motion.a>
                                                )}
                                                {project.githubUrl && (
                                                    <motion.a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Github className="w-6 h-6" />
                                                    </motion.a>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span
                                                className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                                                style={{
                                                    backgroundColor: `${project.color}20`,
                                                    color: project.color
                                                }}
                                            >
                                                {getCategoryIcon(project.category)} {project.category.toUpperCase()}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                                                    +{project.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                                    <div
                                        className="w-full h-full bg-gradient-to-br"
                                        style={{
                                            background: `linear-gradient(135deg, ${selectedProject.color}20, ${selectedProject.color}40)`
                                        }}
                                    />

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    {selectedProject.featured && (
                                        <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured Project
                                        </div>
                                    )}
                                </div>

                                {/* Modal Content */}
                                <div className="p-8">
                                    <div className="mb-6">
                                        <span
                                            className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4"
                                            style={{
                                                backgroundColor: `${selectedProject.color}20`,
                                                color: selectedProject.color
                                            }}
                                        >
                                            {getCategoryIcon(selectedProject.category)} {selectedProject.category.toUpperCase()}
                                        </span>

                                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                            {selectedProject.title}
                                        </h2>

                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex space-x-4">
                                        {selectedProject.liveUrl && (
                                            <motion.a
                                                href={selectedProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                <span>View Live Demo</span>
                                            </motion.a>
                                        )}

                                        {selectedProject.githubUrl && (
                                            <motion.a
                                                href={selectedProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Github className="w-5 h-5" />
                                                <span>View Code</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProjectGallery;

