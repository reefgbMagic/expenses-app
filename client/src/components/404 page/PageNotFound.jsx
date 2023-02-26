/**
 * ------------------------------- *
 *
 * 404 Page Not Found.
 * default route for pages that does not exist.
 *
 * ------------------------------- *
 */


import PageContainer from "./PageContainer";
import Title from "./Title";
import Img from "./Img";
import ReturnBtn from "./ReturnBtn";

const PageNotFound = () => {
    return (
        <PageContainer>
            <ReturnBtn/>
            <Title titleContent="404"/>
            <Title titleContent="Page Not Found."/>
            <Img/>
        </PageContainer>
    )
}
export default PageNotFound;