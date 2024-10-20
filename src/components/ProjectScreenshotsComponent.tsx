import Image from 'react-bootstrap/Image';

const ProjectScreenshotsComponent = (imagesList: any) => {
    return (
        <>
            <section>
                { imagesList.imagesList.map((item: any) => (
                    <Image 
                        src={item.imageLink}
                        alt={item.altText}
                        fluid
                        className="project-screenshots"
                    />            
                ))}
            </section>
        </>
    )
}

export default ProjectScreenshotsComponent;