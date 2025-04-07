import { motion } from "framer-motion";
import IndiaStatesComponent from "./IndiaStatesComponent";

const Floods = () => {
    return (
        <motion.div 
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1 
                className="text-3xl font-bold mb-6 shadow-lg p-4 rounded-lg bg-white text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Floods Details
            </motion.h1>

            <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105  w-full max-w-4xl"
                // style={{ width: '1000px' }} // Updated inline style
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <IndiaStatesComponent disasterType="Flood" />
            </motion.div>
        </motion.div>
    );
}

export default Floods;