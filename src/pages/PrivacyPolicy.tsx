import PrivacyPolicyLayout from '.././components/Layouts/PrivacyPolicyLayout.tsx';
import Footer from '.././components/Layouts/FooterLayout.tsx';

export default () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-zinc-100 dark:bg-zinc-900 items-center">
           <PrivacyPolicyLayout/>
           <Footer/>
        </div>
    )
}