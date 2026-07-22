const commands = new Map();

function registerCommand(command) {
    commands.set(command.name, command);
}

function getCommand(name) {
    return commands.get(name);
}

module.exports = {
    registerCommand,
    getCommand
};
