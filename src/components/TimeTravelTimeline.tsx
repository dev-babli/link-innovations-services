"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
    id: string;
    year: number;
    title: string;
    description: string;
    category: 'technology' | 'business' | 'milestone' | 'achievement';
    image?: string;
    color: string;
}

interface TimeTravelTimelineProps {
    events: TimelineEvent[];
    className?: string;
    onEventSelect?: (event: TimelineEvent) => void;
}

const TimeTravelTimeline: React.FC<TimeTravelTimelineProps> = ({
    events,
    className = '',
    onEventSelect,
}) => {
    const [currentYear, setCurrentYear] = useState(events[0]?.year || 2020);
    const [isTraveling, setIsTraveling] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const sortedEvents = [...events].sort((a, b) => a.year - b.year);
    const minYear = Math.min(...sortedEvents.map(e => e.year));
    const maxYear = Math.max(...sortedEvents.map(e => e.year));

    const categoryColors = {
        technology: '#3B82F6',
        business: '#10B981',
        milestone: '#F59E0B',
        achievement: '#EC4899',
    };

    const categoryIcons = {
        technology: '💻',
        business: '🏢',
        milestone: '🎯',
        achievement: '🏆',
    };

    const travelToYear = (year: number) => {
        setIsTraveling(true);
        setCurrentYear(year);

        setTimeout(() => {
            setIsTraveling(false);
        }, 1000);
    };

    const handleEventClick = (event: TimelineEvent) => {
        setSelectedEvent(event);
        onEventSelect?.(event);
    };

    const getEventPosition = (year: number) => {
        return ((year - minYear) / (maxYear - minYear)) * 100;
    };

    return (
        <div className={`time-travel-timeline ${className}`}>
            {/* Timeline Controls */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Time Travel Timeline</h2>
                    <div className="text-lg font-semibold text-blue-600">
                        {currentYear}
                    </div>
                </div>

                {/* Year Slider */}
                <div className="relative">
                    <input
                        type="range"
                        min={minYear}
                        max={maxYear}
                        value={currentYear}
                        onChange={(e) => travelToYear(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${getEventPosition(currentYear)}%, #E5E7EB ${getEventPosition(currentYear)}%, #E5E7EB 100%)`
                        }}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>{minYear}</span>
                        <span>{maxYear}</span>
                    </div>
                </div>

                {/* Quick Travel Buttons */}
                <div className="flex space-x-2 mt-4">
                    {sortedEvents.map((event) => (
                        <motion.button
                            key={event.id}
                            onClick={() => travelToYear(event.year)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${currentYear === event.year
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {event.year}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full" />

                {/* Traveling Effect */}
                <AnimatePresence>
                    {isTraveling && (
                        <motion.div
                            className="absolute left-6 top-0 w-4 h-4 bg-blue-500 rounded-full"
                            initial={{ y: 0 }}
                            animate={{ y: '100%' }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                    )}
                </AnimatePresence>

                {/* Events */}
                <div className="space-y-8">
                    {sortedEvents.map((event, index) => {
                        const isVisible = Math.abs(event.year - currentYear) <= 2;
                        const isCurrent = event.year === currentYear;

                        return (
                            <motion.div
                                key={event.id}
                                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{
                                    opacity: isVisible ? 1 : 0.3,
                                    x: 0,
                                    scale: isCurrent ? 1.05 : 1
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Event Dot */}
                                <motion.div
                                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer ${isCurrent ? 'ring-4 ring-blue-300' : ''
                                        }`}
                                    style={{ backgroundColor: event.color }}
                                    onClick={() => handleEventClick(event)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {categoryIcons[event.category]}
                                </motion.div>

                                {/* Event Content */}
                                <motion.div
                                    className={`flex-1 p-6 bg-white rounded-lg shadow-lg mx-4 ${index % 2 === 0 ? 'ml-8' : 'mr-8'
                                        }`}
                                    style={{
                                        borderLeft: index % 2 === 0 ? `4px solid ${event.color}` : 'none',
                                        borderRight: index % 2 !== 0 ? `4px solid ${event.color}` : 'none',
                                    }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                                        <span className="text-sm font-semibold text-gray-500">{event.year}</span>
                                    </div>
                                    <p className="text-gray-600">{event.description}</p>
                                    <div className="mt-3">
                                        <span
                                            className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
                                            style={{ backgroundColor: event.color }}
                                        >
                                            {event.category}
                                        </span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Event Detail Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h2>
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="text-lg text-gray-600 mb-4">{selectedEvent.year}</div>
                            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl">{categoryIcons[selectedEvent.category]}</span>
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                                    style={{ backgroundColor: selectedEvent.color }}
                                >
                                    {selectedEvent.category}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TimeTravelTimeline;

