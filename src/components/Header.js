const Header = ({ darkMode, handleDarkMode }) => {
    return (
        <div className="header">
            <h1>Color Notes</h1>
            <button
                className="save"
                onClick={() =>
                    handleDarkMode((previousValue) => !previousValue)}>
                {darkMode ? "Disable DarkMode" : "Enable DarkMode"}</button>
        </div>
    );
};

export default Header;