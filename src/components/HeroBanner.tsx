import { motion } from 'framer-motion';
import profileImage from '@/assets/final-banner-profile.png';
import bannerText from '@/assets/final-banner-text.png';
import bannerBackground from '@/assets/final-banner-bg.png';

const HeroBanner = () => {
    return (
        <section className="relative min-h-[70vh] md:min-h-screen flex justify-center overflow-hidden bg-slate-950">
            {/* Layer 1: Static Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerBackground}
                    alt="Background"
                    className="w-full h-full object-cover opacity-100"
                />
                {/* Optional overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-slate-950/30" />
            </div>

            {/* Text Image - Positioned with container */}
            <div className="container mx-auto px-4 md:px-12 relative z-10 h-full flex flex-col justify-end items-center md:items-start pt-20 md:pt-0 pb-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-start mb-0 md:mb-20"
                >
                    <img
                        src={bannerText}
                        alt="Isaque Santos - Desenvolvedor Full Stack"
                        className="w-[80%] md:w-full max-w-[500px] md:max-w-[700px] h-auto object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Profile Image - Absolutely positioned at bottom */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 right-0 z-20 w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-12"
            >
                <div className="relative w-[90%] md:w-full max-w-[500px] md:max-w-[900px]">
                    <img
                        src={profileImage}
                        alt="Isaque Santos"
                        className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroBanner;
