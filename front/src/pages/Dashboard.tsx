import React from 'react'
import { UseLogout } from '../hooks/useAuth'
// import { useLogout } from '@/hooks/useAuth'
 
const DashboardPage: React.FC = () => {
    const logout = UseLogout()
 
    const onLogout = () => {
        logout.mutate()
    }
 
    return (
        <div>
            <h1>ダッシュボード</h1>
            <button type="button" onClick={onLogout}>ログアウト</button>
        </div>
    )
}
 
export default DashboardPage