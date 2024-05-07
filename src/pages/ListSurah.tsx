
import ListSurahLayout from '.././components/Layouts/ListSurahLayout.tsx';
import Footer from '.././components/Layouts/FooterLayout.tsx';

export default () => {
    return (
        <div className="index-box justify-between">
            <div className="index-list-box">
                <ListSurahLayout/>
            </div>
            <Footer/>
        </div>
    )
}