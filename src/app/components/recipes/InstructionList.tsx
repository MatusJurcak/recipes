'use client';

import { RecipeInstructionSection } from '@/models/recipe';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface InstructionListProps {
    sections: RecipeInstructionSection[];
}

function InstructionListSection({ section }: { section: RecipeInstructionSection }) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`p-4 bg-gray-100 rounded-md shadow-sm`}>
            <div className="flex hover:cursor-pointer " onClick={toggleSection}>
                <p className="text-lg font-bold">{section.title}</p>
                <div className="flex-grow items-center flex justify-end ">{isOpen ? <FaMinus size={20} /> : <FaPlus size={20} />}</div>
            </div>
            <ol
                className={`list-decimal transition-height space-y-2 duration-1000 list-inside overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
                {section.instructions.map((instruction, i) => (
                    <li key={i}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
}

export default function InstructionList({ sections }: InstructionListProps) {
    return (
        <div className="flex flex-col gap-4">
            {sections.map((section, index) => (
                <InstructionListSection key={index} section={section} />
            ))}
        </div>
    );
}
