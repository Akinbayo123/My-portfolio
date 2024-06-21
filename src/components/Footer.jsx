import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full bg-gradient-to-b from-gray-800 to-gray-700 text-white text-center py-10">
            <p>&copy; {currentYear} Odunayo. All Right Reserved </p>

        </div>
    )
}

export default Footer