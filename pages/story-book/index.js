// import components
import PlaylistByCategoryLevel1 from '../../src/components/PlaylistByCategoryLevel1/PlaylistByCategoryLevel1';
import { PageTitles } from '../../src/constants/pageTitle.constant';

const StoryBookPage = () => {
    return (
        <PlaylistByCategoryLevel1 pageTitle={PageTitles.STORY_BOOK} />
    )
}

export default StoryBookPage