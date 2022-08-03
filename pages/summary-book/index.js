// import components
import PlaylistByCategoryLevel1 from '../../src/components/PlaylistByCategoryLevel1/PlaylistByCategoryLevel1';
import { PageTitles } from '../../src/constants/pageTitle.constant';

const SummaryBookPage = () => {
    return (
        <PlaylistByCategoryLevel1 pageTitle={PageTitles.SUMMARY_BOOK} isDisplayTitle={false} />
    )
}

export default SummaryBookPage