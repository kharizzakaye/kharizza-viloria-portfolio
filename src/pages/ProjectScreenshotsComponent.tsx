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
                        className="mb-5"
                    />            
                ))}
            </section>
        </>
    )
}

export default ProjectScreenshotsComponent;