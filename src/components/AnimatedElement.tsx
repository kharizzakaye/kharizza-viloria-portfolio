import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
    children: ReactNode;
    className?: string;
    id?: string;
    viewportOnce?: boolean;
    viewportAmount?: number;
    transitionDuration?: number;
}

const AnimatedElement: React.FC<AnimatedHeadingProps> = ({ 
    children, 
    className, 
    id, 
    viewportOnce = true,
    viewportAmount = 0.5,
    transitionDuration = 1 
}) => {

    // Define the animation variants
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <motion.div
            className={className}
            id={id}
            initial="hidden" // Initial state
            whileInView="visible" // State when in view
            variants={variants} // Link to the defined variants
            viewport={{ once: viewportOnce, amount: viewportAmount }} // Animate when half the element is in view
            transition={{ duration: transitionDuration }} // Animation duration
        >
            {children}
        </motion.div>
    );
};

export default AnimatedElement;
