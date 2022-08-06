// import components
import PlaylistByCategoryLevel1 from '../../src/components/PlaylistByCategoryLevel1/PlaylistByCategoryLevel1';
import { PageTitles } from '../../src/constants/pageTitle.constant';

const PodcastPage = () => {
    return (
        <PlaylistByCategoryLevel1 pageTitle={PageTitles.PODCAST} />
    )
}

export default PodcastPage