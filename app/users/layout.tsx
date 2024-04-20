import Sidebar from '@/app/components/sidebar/Sidebar'
import getUsers from '../actions/getUsers';
import UserList from './components/UserList';

export default async function UsersLayout({children}: {children: React.ReactNode}) {

    const user = await getUsers();

    return (
        <Sidebar>
            <div className="h-full">
                <UserList items={user}/>
                {children}
            </div>
        </Sidebar>
    )
}