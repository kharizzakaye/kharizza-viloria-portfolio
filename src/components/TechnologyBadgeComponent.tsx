import React from 'react'
import Badge from 'react-bootstrap/Badge';

const TechnologyBadgeComponent = (technologiesList: any) => {
    return (
        <>
            <section className="technology-badge-section">
                { technologiesList.technologiesList.map((item: any) => (
                    <Badge className="rounded-pill bg-warning text-dark technology-badge">{item}</Badge>
                ))}
            </section>
        </>
    )
}

export default TechnologyBadgeComponent