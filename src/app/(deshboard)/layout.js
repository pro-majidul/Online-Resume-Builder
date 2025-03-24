

const DashboardLayout = ({children}) => {
    return (<>
    <div className="grid grid-cols-12">
        {/* side bar */}
        <div className="col-span-3">
            Sidebar
        </div>
        {/* Dashboard */}
        <div className="col-span-9">
            {children}
        </div>
    </div>
    </>)
};

export default DashboardLayout;