import { Col, Row } from 'react-bootstrap';
import ReactCompareImage from 'react-compare-image';

const ImageComparisonComponent = (imagesList: any) => {
    return (
        <section>
            <Row xl={3} lg={3} md={2} sm={1} xs={1} className="g-4">
                { imagesList.imagesList.map((item: any, index: any) => (
                    <Col key={index}>
                        <ReactCompareImage 
                            leftImage={item.beforeImage.imageLink}
                            rightImage={item.afterImage.imageLink}
                        />;
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default ImageComparisonComponent