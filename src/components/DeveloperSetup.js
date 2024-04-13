import React from 'react';
import Card from '../stories/Card/Card.tsx';  
import Table from '../stories/Table/Table.tsx'; 

function DeveloperSetup() {
    const setups = [
        {
            title: "VsCode Setup",
            content: "Install extensions such as ESLint, Prettier, and configure settings for optimal development.",
        },
        {
            title: "Terminal Setup",
            content: "Configure integrated terminal in VSCode with Bash, Zsh, or another preferred shell.",
        },
        {
            title: "Preferred Editor Font",
            content: "Use a monospaced font like Fira Code for better readability and coding efficiency.",
        }
    ];

    const tableData = {
        headers: ["Tool", "Description"],
        rows: [
            ["Visual Studio Code", "A source-code editor made by Microsoft for Windows, Linux and macOS."],
            ["Fira Code", "A free and open source font with programming ligatures."],
            ["Bash/Zsh", "Command processors that run in a text window."]
        ]
    };

    return (
        <div className="developer-setup">
            <h2>Developer Setup</h2>
            {setups.map((setup, index) => (
                <Card
                    key={index}
                    title={setup.title}
                    content={setup.content}
                    imageUrl={setup.imageUrl}
                    alignText="left"
                    hoverEffect={true}
                    backgroundColor="#f0f0f0"
                />
            ))}
            <Table
                headers={tableData.headers}
                rows={tableData.rows}
                colSpacing={10}
                cellColors="white"
                borderColor="#387ADF"
                borderWidth={1}
                fontSize="16px"
                textColor="#000"
                headerBgColor="#007bff"
                rowHoverEffect={true}
            />
          
        </div>
    );
}

export default DeveloperSetup;
