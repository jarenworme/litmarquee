import { useRoutes } from "react-router-dom";

import CalendarPage from "./pages/calendarpage";
import LandingPage from "./pages/landingpage";
import ShowList from "./pages/showlist";

export default function Router (){
    return useRoutes([
        {
            path: '/',
            children: [
                {path: '/', element: <LandingPage />},
                {path: '/calendarPage', element: <CalendarPage />},
                {path: '/showList', element: <ShowList />},
            ]
        },
    ]);
}
