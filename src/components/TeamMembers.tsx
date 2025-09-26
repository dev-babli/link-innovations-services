"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, ExternalLink } from 'lucide-react';

interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar: string;
    skills: string[];
    social: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        email?: string;
    };
    color: string;
}

const TeamMembers: React.FC = () => {
    const [hoveredMember, setHoveredMember] = useState<string | null>(null);

    const teamMembers: TeamMember[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 15+ years in tech. Passionate about innovation and building exceptional teams.',
            avatar: '/assets/team/sarah.jpg',
            skills: ['Leadership', 'Strategy', 'Product Vision', 'Team Building'],
            social: {
                linkedin: 'https://linkedin.com/in/sarahjohnson',
                twitter: 'https://twitter.com/sarahjohnson',
                email: 'sarah@linkinnovations.com'
            },
            color: '#3B82F6'
        },
        {
            id: '2',
            name: 'Michael Chen',
            role: 'CTO',
            bio: 'Full-stack architect with expertise in scalable systems and cutting-edge technologies.',
            avatar: '/assets/team/michael.jpg',
            skills: ['React', 'Node.js', 'AWS', 'System Architecture'],
            social: {
                linkedin: 'https://linkedin.com/in/michaelchen',
                github: 'https://github.com/michaelchen',
                email: 'michael@linkinnovations.com'
            },
            color: '#10B981'
        },
        {
            id: '3',
            name: 'Emily Rodriguez',
            role: 'Lead Designer',
            bio: 'Creative designer focused on user experience and beautiful, functional interfaces.',
            avatar: '/assets/team/emily.jpg',
            skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
            social: {
                linkedin: 'https://linkedin.com/in/emilyrodriguez',
                twitter: 'https://twitter.com/emilyrodriguez',
                email: 'emily@linkinnovations.com'
            },
            color: '#EC4899'
        },
        {
            id: '4',
            name: 'David Thompson',
            role: 'Senior Developer',
            bio: 'Mobile app specialist with a passion for creating seamless user experiences.',
            avatar: '/assets/team/david.jpg',
            skills: ['React Native', 'Flutter', 'iOS', 'Android'],
            social: {
                linkedin: 'https://linkedin.com/in/davidthompson',
                github: 'https://github.com/davidthompson',
                email: 'david@linkinnovations.com'
            },
            color: '#8B5CF6'
        },
        {
            id: '5',
            name: 'Lisa Wang',
            role: 'DevOps Engineer',
            bio: 'Infrastructure expert ensuring our systems are secure, scalable, and reliable.',
            avatar: '/assets/team/lisa.jpg',
            skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
            social: {
                linkedin: 'https://linkedin.com/in/lisawang',
                github: 'https://github.com/lisawang',
                email: 'lisa@linkinnovations.com'
            },
            color: '#F59E0B'
        },
        {
            id: '6',
            name: 'Alex Kumar',
            role: 'Data Scientist',
            bio: 'AI and machine learning expert helping businesses unlock insights from their data.',
            avatar: '/assets/team/alex.jpg',
            skills: ['Python', 'Machine Learning', 'Data Analysis', 'AI'],
            social: {
                linkedin: 'https://linkedin.com/in/alexkumar',
                github: 'https://github.com/alexkumar',
                email: 'alex@linkinnovations.com'
            },
            color: '#EF4444'
        }
    ];

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The talented individuals behind Link Innovations, dedicated to delivering exceptional results
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                            onMouseEnter={() => setHoveredMember(member.id)}
                            onMouseLeave={() => setHoveredMember(null)}
                        >
                            <motion.div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Avatar Section */}
                                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
                                    </div>

                                    {/* Avatar */}
                                    <motion.div
                                        className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl"
                                        animate={{
                                            scale: hoveredMember === member.id ? 1.1 : 1,
                                            rotate: hoveredMember === member.id ? 5 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {getInitials(member.name)}
                                    </motion.div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredMember === member.id ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex space-x-4">
                                            {member.social.linkedin && (
                                                <motion.a
                                                    href={member.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Linkedin className="w-6 h-6" />
                                                </motion.a>
                                            )}
                                            {member.social.twitter && (
                                                <motion.a
                                                    href={member.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-50 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Twitter className="w-6 h-6" />
                                                </motion.a>
                                            )}
                                            {member.social.github && (
                                                <motion.a
                                                    href={member.social.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Github className="w-6 h-6" />
                                                </motion.a>
                                            )}
                                            {member.social.email && (
                                                <motion.a
                                                    href={`mailto:${member.social.email}`}
                                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 hover:bg-green-50 transition-colors"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Mail className="w-6 h-6" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p
                                            className="text-sm font-medium"
                                            style={{ color: member.color }}
                                        >
                                            {member.role}
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 text-center">
                                        {member.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                            Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skillIndex}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: skillIndex * 0.05 }}
                                                    className="px-3 py-1 text-xs font-medium rounded-full"
                                                    style={{
                                                        backgroundColor: `${member.color}20`,
                                                        color: member.color
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Button */}
                                    <motion.button
                                        className="w-full py-2 px-4 rounded-lg text-sm font-medium text-white transition-colors"
                                        style={{ backgroundColor: member.color }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Get in Touch
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Want to Join Our Team?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            We&apos;re always looking for talented individuals who share our passion for innovation and excellence.
                        </p>
                        <motion.button
                            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2 mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View Open Positions</span>
                            <ExternalLink className="w-4 h-4" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamMembers;

