const ping = require("./commands/general/ping");
const menu = require("./commands/general/menu");

function handleCommand(message) {

    if (!message.startsWith("!")) {
        return;
    }

    const command = message.slice(1).toLowerCase();

    if (command === ping.name) {
        ping.execute();
    }

    else if (command === menu.name) {
        menu.execute();
    }

    else {
        console.log("❌ Unknown command");
    }
}

module.exports = handleCommand;
