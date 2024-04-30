import DetailSurahLayout from '.././components/Layouts/DetailSurahLayout.tsx';
import Footer from '.././components/Layouts/FooterLayout.tsx';

export default () => {
    return (
        <div className="index-box justify-between">
            <div className="index-box">
                <DetailSurahLayout/>
            </div>
            <Footer/>
        </div>
    )
}