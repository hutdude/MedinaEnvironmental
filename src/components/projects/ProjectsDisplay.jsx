import '../../components/shared/gradients.css'
import Noise from '../shared/Noise'
import Card from '../shared/Card';
import { useState, useEffect } from 'react';
import PlaceholderCard from '../shared/CardPlaceholder';

const projectsURL = `/api/wp-json/wp/v2/projects?acf_format=standard&_fields=id,title,acf&timestamp=${Date.now()}`

export default function ProjectsDisplay() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("work");
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const req = await fetch(projectsURL);
                const projectsData = await req.json();
                setProjects(projectsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);
    
    const categories = [
        { name: 'Work', slug: 'work' },
        { name: 'Articles', slug: 'article' },
        { name: 'Presentations', slug: 'presentation' }
    ];

    const handleCategoryClick = (categorySlug) => {
        setActiveCategory(categorySlug === activeCategory ? null : categorySlug);
        setCurrentPage(1); // Reset to first page when changing categories
    };

    const filteredProjects = activeCategory
        ? projects?.filter(project => project.acf.category.slug === activeCategory)
        : projects;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredProjects?.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil((filteredProjects?.length || 0) / cardsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div className="relative bg-blue-grad min-h-screen">
            <Noise className="absolute inset-0"/>
            <div className="container mx-auto px-4 py-16">
                <h2 className='text-white text-center font-bold text-xl mb-8'>recent work</h2>
                {totalPages > 1 && (
                            <div className="flex justify-center mt-8">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => paginate(i + 1)}
                                        className={`z-30 mx-1 px-3 py-1 rounded ${
                                            currentPage === i + 1 ? 'bg-white text-blue-grad' : 'bg-transparent text-white'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                <div className="flex items-start flex-col lg:flex-row">
                    <div id="menu" className='w-full lg:w-1/3 mb-8 lg:mb-0'>
                        <div className='flex flex-row lg:flex-col lg:gap-16 justify-center lg:justify-start items-center lg:items-start gap-4 text-white'>
                            {categories.map(category => (
                                <button
                                    key={category.slug}
                                    onClick={() => handleCategoryClick(category.slug)}
                                    className={`z-30 hover:scale-105 text-center lg:text-left ${activeCategory === category.slug ? 'font-bold' : ''}`}
                                >
                                    {category.name} {activeCategory === category.slug ? "•" : ""}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div id="card-display" className='w-full lg:w-2/3'>
                        <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8'>
                            {loading || !projects || projects.length === 0 ? (
                                // Render blank card placeholder when loading
                                Array(2).fill().map((_, index) => (
                                    <PlaceholderCard key={`placeholder-${index}`} />
                                ))
                            ) : (
                                // Render actual data cards when not loading
                                currentCards.map((project) => (
                                    <Card 
                                        textColor="text-white" 
                                        text={project.acf.summary}
                                        category={project.acf.category.name} 
                                        bg="bg-white bg-opacity-5" 
                                        imageURL={project.acf.image} 
                                        title={project.title.rendered} 
                                        key={project.id}
                                    />
                                ))
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}