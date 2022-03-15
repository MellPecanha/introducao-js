const getAdmin = (map) => {
    let admins = [];

    for ([key, value] of map){
        if (value === 'ADMIN'){
            admins.push(key);
        }
    }
    return admins;
};

const userRoles = new Map();

userRoles.set('Carol', 'ADMIN');
userRoles.set('Edilson', 'ADMIN');
userRoles.set('Giovanna', 'USER');
userRoles.set('Carlo', 'USER');
userRoles.set('Daniela', 'ADMIN');

console.log(getAdmin(userRoles));