// Funkcja opisująca logikę pojedynczej zakładki
export const Tab = ({children }) => {
    return (
        <div><br/>{children}<br/></div>
    );
};

// Funkcja opisująca logikę oraz renderowanie wszystkich zakładek
export const Tabs = ({ tabs, activeIndex, setActiveIndex }) => {
    return (
    <div>
        <div>
            {tabs.map((tab, index) => (
                <button className="button" key={tab.label} onClick={() => setActiveIndex(index)}>{tab.label}</button>
            ))}
        </div>
        <div>{tabs[activeIndex].content}</div>
    </div>
    );
};