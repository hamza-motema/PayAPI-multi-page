import './css/layout.css'

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <main>
                {children}
            </main>
        </div>
    )
}

