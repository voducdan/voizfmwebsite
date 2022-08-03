// import components
import PlaylistByCategoryLevel1 from '../../src/components/PlaylistByCategoryLevel1/PlaylistByCategoryLevel1';
import { PageTitles } from '../../src/constants/pageTitle.constant';

const ChildrenBookPage = () => {
    return (
        <PlaylistByCategoryLevel1 pageTitle={PageTitles.CHILDREN_BOOK} isDisplayTitle={false} />
    )
}

export default ChildrenBookPage