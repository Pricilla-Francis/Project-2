import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const UserList = ({ users }) => {
    return (_jsxs(_Fragment, { children: [_jsx("h2", { className: "pb-5", children: "Check out all your friends!" }), users && users.map((user) => (_jsxs("div", { className: "row align-center mb-5", children: [_jsx("div", { className: "col-md-6", children: _jsxs("h3", { children: [user.id, ". ", user.username] }) }), _jsx("div", { className: "col-md-6", children: _jsx("h4", { children: _jsx("a", { href: `mailto:${user.email}`, children: user.email }) }) })] }, user.id)))] }));
};
export default UserList;
