import React, { useState } from 'react';

const TreeNode = ({ name, groupid, pgroupid, data }) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <li key={groupid}>
            <span onClick={handleClick}>{expanded ? '▼' : '▶'}{name}</span>
            {groupid !== pgroupid && expanded && (
                <ul>
                    {findChildren(data, groupid).map((child) => (
                        <TreeNode key={child.groupid} {...child} data={data} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const findChildren = (data, parentGroupId) => {
    return data.filter((item) => item.pgroupid === parentGroupId);
};

const FleetTree = ({ data }) => {
    const topLevelGroups = data.filter((item) => item.pgroupid === 1);
    return (
        <ul>
            {topLevelGroups.map((item) => (
                <TreeNode key={item.groupid} {...item} data={data} />
            ))}
        </ul>
    );
};

export default FleetTree;
