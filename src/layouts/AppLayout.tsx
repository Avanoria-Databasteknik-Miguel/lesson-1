
import { useMatches, type RouteObject } from 'react-router-dom';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const AppLayout = () => {

    const matches: RouteObject[] = useMatches();

    useEffect(() => {
        const lastMatchWithTitle = [...matches].reverse().find(match => match.handle?.title)

        if (lastMatchWithTitle) {
            document.title = `${lastMatchWithTitle?.handle?.title} | Avanoria AB`
        }

    }, [matches])

    return (
        <div className='app-layout'>
            <Header/>
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}

export default AppLayout